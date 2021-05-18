const fs = require('fs');


app.get('/api/notes', (req, res) => {

    console.log("Executing GET notes");

    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

    console.log("GET request - Returning notes data: " + JSON.stringify(data));

    response.json(data);
});

app.post('api/notes', (req, res) => {

    const newNote = req.body;

    console.log("POST request - New Note: " + JSON.stringify(newNote));

    let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

    data.push(newNote);

    fs.writeFileSync('./db/db.json', JSON.stringify(data));

    console.log("You added a new note!");

    res.json(data);
});

module.exports = app;

