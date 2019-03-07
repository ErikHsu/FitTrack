const express = require('express');
const nutrition = require('../models/nutrition');

const app = express.Router();

app.get("/", (req, res) => {
    user.getAll((err, data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.get("./:id", (req, res) => {
    nutrition.getAll((err, data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.post("/", (req, res) => {
    console.log(req.body)
    nutrition.add(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});

module.exports = app;