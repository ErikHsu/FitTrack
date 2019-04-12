const express = require('./node_modules/express'); 
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

module.exports = app;