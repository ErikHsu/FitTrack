const express = require('express');
const plan = require('../models/workoutPlan');

const app = express.Router();

app.get("/", (req, res) => {
    plan.getAll((err, data) => {
        if(err) throw err;
        res.send(dataa);
    });
});

app.get("./:id", (req, res) => {
    plan.getAll((err, data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.post("/", (req, res) => {
    console.log(req.body)
    plan.add(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.post("/", (req, res) => {
    console.log(req.body)
    plan.add(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});

module.exports = app;