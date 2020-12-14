const path = require('path');
const noteData = require('../db/db.json');

module.exports = (app) => {

    //GET to return notes
    app.get('/api/notes', (req, res) => res.json(noteData));

    //POST adds notes
    app.post('/api/notes', (req, res) => {

    });

    //Delete posts
    app.delete('/api/notes/:id', (req, res) => {
        
    })

}