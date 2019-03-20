const express = require('express');
const people = require("./models/people");

const app = express.Router();

//get all
app.get("/", (req, res) => {
    people.getAll((err, data) => {
        if(err) throw(err);
        res.send(data);
    });
});
//get person via id
app.get("/:id", (req, res) => {
    people.get(req.param.id, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
//add new person
app.post("/", (req, res) => {
    console.log(req.body)
    people.add(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
//edit person via username
app.post("/edit", (req, res) => {
    console.log(req.body)
    people.add(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});

module.exports = app;