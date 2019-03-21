const express = require('express');
const exercise_type = require('../models/exercise_type');

const app = express.Router();

//get all
app.get("/", (req, res) => {
    exercise_type.getAll((err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
//get exercise type by id
app.get("/:id", (req, res) => {
    exercise_type.get((err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
//add exercise type
app.post("/", (req, res) => {
    console.log(req.body)
    exercise_type.add(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
//edit exercise type
app.post("/edit", (req, res) => {
    console.log(req.body)
    exercise_type.editType(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});

module.exports = app;