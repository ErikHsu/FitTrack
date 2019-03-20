const express = require('express'); 
const exercise = require('../models/exercise');

const app = express.Router();

//get all 
app.get("/", (req, res) => {
    exercise.getAll((err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
//get exercise via id
app.get("/:id", (req, res) => {
    exercise.get((err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
//add exercise
app.post("/", (req, res) => {
    console.log(req.body)
    exercise.add(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
//edit exercise
app.post("/edit", (req, res) => {
    console.log(req.body)
    exercise.editPlan(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});

module.exports = app;