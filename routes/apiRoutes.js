const fs = require('fs');

const { v4: uuidv4 } = require('uuid');

module.exports = function (app) {

    app.get('/api/notes', (req, res) => {

        console.log("Executing GET notes");

        let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

        console.log("GET request - Returning notes data: " + JSON.stringify(data));

        res.json(data);
    });

    app.post('api/notes', (req, res) => {

        const newNote = req.body;

        console.log("POST request - New Note: " + JSON.stringify(newNote));

        newNote.id = uuidv4();

        let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

        data.push(newNote);

        fs.writeFileSync('./db/db.json', JSON.stringify(data));

        console.log("You added a new note!");

        res.json(data);
    });


};
