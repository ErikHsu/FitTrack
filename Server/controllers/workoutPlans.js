const express = require('express');
const plan = require('../models/workout_plan');

const app = express.Router();

//get all
app.get("/", (req, res) => {
    plan.getAll((err, data) => {
        if(err) throw err;
        res.send(dataa);
    });
});
//get workout plan via id
app.get("/:id", (req, res) => {
    plan.get((err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
//add workout plan
app.post("/", (req, res) => {
    console.log(req.body)
    plan.add(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
//edit workout plan
app.post("/edit", (req, res) => {
    console.log(req.body)
    plan.add(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});

module.exports = app;