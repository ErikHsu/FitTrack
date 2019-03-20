const express = require('express');
const food = requre('../models/food');

const app = express.Router();

//get all
app.get("/", (req, res) => {
    food.getAll((err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
//get food by id
app.get("/:id", (req, res) => {
    food.get((err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
//add food
app.post("/", (req, res) => {
    console.log(req.body)
    food.add(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
//edit food
app.post("/edit", (req, res) => {
    console.log(req.body)
    food.editPlan(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});

module.exports = app;