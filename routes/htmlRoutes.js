
const path = require('path');
const router = require('express').Router();

//routing
module.exports = (app) => {
    //default wild card sends user home
    app.get('/', (req,res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });

    //sends user to notes.html
    app.get('/notes', (req,res) => {
        res.sendFile(path.join(__dirname, '../public/notes.html'));
    });
}

