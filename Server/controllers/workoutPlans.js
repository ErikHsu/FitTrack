const express = require('express');
const plan = require('../models/workout_plan');

const app = express.Router();

//get all
app.get("/", (req, res, next) => {
    plan.getAll()
    .then(x => res.send(x))
    .catch(next)
});
//get workout plan via id
app.get("/:id", (req, res, next) => {
    plan.get(req.params.id)
    .then(x => res.send(x))
    .catch(next)
});
//add workout plan
app.post("/add", (req, res, next) => {
    plan.add(req.body)
    .then(x => res.send(x))
    .catch(next)
});
//edit workout plan
app.post("/edit", (req, res, next) => {
    plan.editPlan(req.body.oldWorkoutPlan, newWorkoutPlan)
    .then(x => res.send(x))
    .catch(next)
});
//Link plan to user
app.post("/linkToUser", (req, res, next) => {
    plan.linkToUser(req.body)
    .then(x => res.send(x))
    .catch(next)
});


module.exports = app;

/*
//delete via id
app.post("/:id", (req, res) => {
    console.log(req.body)
    plan.deleteId(req.params.id, id, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
//delete via planName
app.post("/deleteWorkout", (req, res) => {
    console.log(req.body)
    plan.deleteWorkoutPlan(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
*/