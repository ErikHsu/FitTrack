const express = require('express');
const exercise_type = require('../models/exercise_type');

const app = express.Router();

//get all
app.get("/", (req, res, next) => {
    exercise_type.getAll()
    .then(x => res.send(x))
    .catch(next)
});
//get exercise type by id
app.get("/:id", (req, res,next) => {
    exercise_type.get(req.params.id)
    .then(x => res.send(x))
    .catch(next)
});
//add exercise type
app.post("/addType", (req, res, next) => {
    exercise_type.add(req.body)
    .then(x => res.send(x))
    .catch(next)
});
//edit exercise type
app.post("/edit", (req, res, next) => {
    exercise_type.editType(req.body.oldExerciseType, req.body.newExerciseType, req.body.bodyFocus)
    .then(x => res.send(x))
    .catch(next)
});

module.exports = app;

/*
//delete exercise type via id
app.post("/:id", (req, res) => {
    console.log(req.body)
    exercise_type.deleteId(req.params.id, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
//delete exercise type via typeName
app.post("/deleteType", (req, res) => {
    console.log(req.body)
    exercise_type.deleteWorkoutPlan(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
*/
