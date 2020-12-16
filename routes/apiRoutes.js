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
    let id = notes.length;
    note.id = id + 1;
    notes.push(note);
    return res.json(notes);
    updateNoteDb();
  });

  // app.delete

  //function to update json files
  function updateNoteDb() {
    fs.writeFile("db/db.json",JSON.stringify(notes,'\t'),err => {
        if (err) throw err;
        return true;
    });
}


};

