const express = require('express');
const people = require("./models/people");

const app = express.Router();

app.get("/", (req, res) => {
    people.getAll((err, data) => {
        if(err) throw(err);
        res.send(data);
    });
});

app.get("./:id", (req, res) => {
    people.getAll((err, data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.post("/", (req, res) => {
    console.log(req.body)
    people.add(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.post("/editName", (req, res) => {
    console.log(req.body)
    people.editName(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.post("/editAddr", (req, res) => {
    console.log(req.body)
    people.editAddr(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});

module.exports = app;