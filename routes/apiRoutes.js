const fs = require('fs');
const path = require('path');
const noteData = require('../db/db.json');

module.exports = (app) => {


    //GET to return notes
    app.get('/api/notes', (req, res) => {
        fs.readFile(path.join(__dirname, '/db/db.json'), "utf8", (err, data) => {
            if(err) throw err;
            res.json(noteData);
        });
    });

    //POST adds notes
    app.post('/api/notes', (req, res) => {
        let newNote = req.body;
        let id = noteData.length;
        newNote.id = id + 1;
        noteData.push(newNote);
        return res.json(noteData);
       
    });

    //Delete posts
    app.delete('/api/notes/:id', (req, res) => {

    })

}