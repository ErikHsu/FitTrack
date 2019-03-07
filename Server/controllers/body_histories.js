const express = require('express');
const body_history = require('../models/body_history');

const app = express.Router();

app.get("/", (req, res) => {
    body_history.getAll((err, data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.get("./:id", (req, res) => {
    body_history.getAll((err, data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.post("/", (req, res) => {
    console.log(req.body)
    body_history.add(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});

module.exports = app;