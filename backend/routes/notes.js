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


//ROUTE : Update an exixting notes for the logged in user using :PUT "/api/notes/updatenote".Login required


router.put("/updatenote/:id", fetchuser, async (req, res) => {
  
  try {
    const { title, description, tag } = req.body;
    // Create a newnote object
    const newNote = {};
    if (title) {
      newNote.title = title;
    }

    if (description) {
      newNote.description = description;
    }
    if (tag) {
      newNote.tag = tag;
    }
    // Find the note to be updated and update it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }
    // Check if the user is the owner of the note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ error: "Not allowed" });
    }
    note = await Note.findByIdAndUpdate(req.params.id, { $set: newNote }, { new: true });
    res.json(note);
  }
    catch(err){
      return res.status(500).json({ error: "Internal Server Error" });
    }
  
 



})



router.delete("/deletenote/:id", fetchuser, async (req, res) => {   
  try {
    // Find the note to be deleted and delete it
    let note = await Note.findById(req.params.id);
    if (!note) {
      return res.status(404).json({ error: "Note not found" });
    }
    // Check if the user is the owner of the note
    if (note.user.toString() !== req.user.id) {
      return res.status(401).json({ error: "Not allowed" });
    }
    note = await Note.findByIdAndDelete(req.params.id);
    res.json({ message: "Note deleted successfully" });
  }
  catch (err) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
    
});



module.exports = router
