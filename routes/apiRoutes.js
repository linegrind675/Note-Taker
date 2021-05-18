const { response } = require('express');
const fs = require('fs');

module.exports = function(app) {

    app.get('/api/notes', (req, res) => {
        
        console.log("Executing GET notes");

        let data = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

        console.log("GET request - Returning notes data: " + JSON.stringify(data));

        response.json(data);
    });

    

}
