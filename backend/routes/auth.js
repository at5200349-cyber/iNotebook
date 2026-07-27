const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "amanthakur";
const fetchuser=require("../middleware/fetchuser")

// Route1   Create a User : post api . No login requuired

router.post(
  "/Createuser",
  [
    body("name").isLength({ min: 3 }),
    body("email").isEmail(),
    body("password").isLength({ min: 8 }),
  ],
  async (req, res) => {
    // if there are error return badrequset with error
    const result = validationResult(req);

    if (!result.isEmpty()) {
      return res.status(400).json({
        errors: result.array(),
      });
    }
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exiss" });
      }
      const salt = await bcrypt.genSalt(10);

      const secpass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secpass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, JWT_SECRET, { expiresIn: "1d" });
      // console.log(token)
      res.json({ token });
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  },
);

// Route 2 authenticatuser No login required

router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password cannot be blank").notEmpty(),
  ],
  async (req, res) => {
    const result = validationResult(req);
    if (!result.isEmpty()) {
      return res.status(400).json({ err: result.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user)
        return res.status(400).json({ error: "Invaild email or password" });
      const passwordcompare = await bcrypt.compare(password, user.password);
      if (!passwordcompare) {
        return res.status(400).json({ error: "Invalid email or password" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, JWT_SECRET, { expiresIn: "1d" });
      res.json({ token });
    } catch (err) {
      console.log(err.message);
      res.status(500).send("Internal Server Error");
    }
  },
);

// ROUTE 3: Get loggedin User Details using : POST "/api/auth/getuser".Login required


router.post("/getuser",fetchuser,async (req, res) => {
    try {
      const userId=req.user.id
      const user=await User.findById(userId).select("-password");
      res.send(user)
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Internal Server Error");
    }
  })

module.exports = router;
