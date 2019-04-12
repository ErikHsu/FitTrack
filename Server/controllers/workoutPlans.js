const express = require('./node_modules/express');
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
    plan.get(req.params.id, (err, data) => {
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
    plan.editPlan(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
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

module.exports = app;