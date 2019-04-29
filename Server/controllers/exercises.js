const express = require('express'); 
const exercise = require('../models/exercise');

const app = express.Router();

//get all 
app.get("/getExercises", (req, res, next) => {
    exercise.getAll()
    .then(x => res.send(x))
    .catch(next)
});
//get exercise via id
app.get("/:id", (req, res, next) => {
    exercise.get(req.params.id) 
    .then(x => res.send(x))
    .catch(next)
});
//add exercise
app.post("/addExercise", (req, res, next) => {
    exercise.add(req.body)
    .then(x => res.send(x))
    .catch(next)
});
//edit exercise
app.post("/edit", (req, res, next) => {
    exercise.editPlan(req.body.oldExerciseName, req.body.newExerciseName)
    .then(x => res.send(x))
    .catch(next)
});
//Exercise and type join
app.get("/getAllInfo", (req, res, next) => {
    exercise.getAllInfo()
    .then(x => res.send(x))
    .catch(next)
});

module.exports = app;

/*
//delete exercise via id
app.post("/:id", (req, res) => {
    console.log(req.body)
    exercise.deleteId(req.params.id, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
//delete exercise via exerciseName
app.post("/deleteExercise", (req, res) => {
    console.log(req.body)
    exercise.deleteWorkoutPlan(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
*/