const express = require('express');
const people = require('../models/people');

const app = express.Router();

//get all
app.get("/", (req, res, next) => {
    people.getAll()
    .then(x => res.send(x))
    .catch(next)
});
//get person via id
app.get("/:id", (req, res, next) => {
    people.get(id)
    .then(x => res.send(x))
    .catch(next)
});
//add new person
app.post("/", (req, res, next) => {
    people.add(req.body)
    .then(x => res.send(x))
    .catch(next)
});
//edit person via username
app.post("/edit", (req, res, next) => {
    people.add(req.body.firstName, lastName, birthday, userName)
    .then(x => res.send(x))
    .catch(next)
});

module.exports = app;

/*
//delete via id
app.post("/:id", (req, res) => {
    console.log(req.body)
    people.deleteId(req.params.id, (err, data) => {
        if(err) throw err;
        res.send(data)
    });
});
//delete via userName
app.post("/deletePerson", (req, res) => {
    console.log(req.body)
    people.deletePeople(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
*/
