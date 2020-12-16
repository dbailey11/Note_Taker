const path = require("path");
const notes = require("../db/db.json");
const fs = require("fs");

module.exports = (app) => {
  //GET to return notes
  app.get("/api/notes", (req, res) => {
    res.json(notes);
  });

  app.post("/api/notes", (req, res) => {
    const note = req.body;
    let id = dbNotes.length;
    note.id = id + 1;
    dbNotes.push(note);
    dbUpdate(dbNotes);
    return res.json(dbNotes);
  });


  // Delete posts
  app.delete("/api/notes/:id", (req, res) => {
    let id = req.params.id;
    let x = 1;
    delete dbNotes[id - 1];
    dbUpdate(dbNotes);
    res.send(dbNotes);
  });

};

