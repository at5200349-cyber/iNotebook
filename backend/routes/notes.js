const express = require("express");
const router = express.Router();
const fetchuser = require("../middleware/fetchuser");
const Note = require("../models/Note");
const { body, validationResult } = require("express-validator");

//ROUTE 1: Get all the notes of the logged in user using: GET "/api/notes/getuser".Login required
router.get("/fetchallnotes", fetchuser, async (req, res) => {
  try {
    const notes = await Notes.find({ user: req.user.id });
    res.json(notes);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

//ROUTE 2: create the notes for the logged in user using :POST "/api/notes/createnotes".Login required
router.post(
  "/addnote",
  fetchuser,
  [
    body("title", "Enter a  title min length 3").isLength({ min: 3 }),
    body("description", "Enter  desription must be 5 chracter").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    try {
      const result = validationResult(req);
      //If there are errors ,return Bad request and the error
      const { title, description, tag } = req.body;

      if (!result.isEmpty()) {
        return res.status(400).json({ error: result.array() });
      }
      const note = new Note({
        title,
        description,
        tag,
        user: req.user.id,
      });
      const savenote = await note.save();
      res.json(savenote);
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  },
);
module.exports = router;
