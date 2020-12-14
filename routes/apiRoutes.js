const path = require("path");
const notes = require("../db/db.json");
const fs = require("fs");

module.exports = (app) => {
  //GET to return notes
  app.get("/api/notes", (req, res) => {
    res.json(notes);
  });

  app.post("/api/notes", (req, res) => {
    // req.body.id = uniqid();
    const note = req.body;
    console.log(notes);
    notes.push(note);
    fs.writeFileSync(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(notes)
    );
    res.json(note);
    console.log(notes);
  });
};

//Delete posts
// app.delete('/api/notes/:id', (req, res) => {

// });
