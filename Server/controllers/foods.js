const express = require('express');
const food = require('../models/food');

const app = express.Router();

//get all
app.get("/", (req, res, next) => {
    food.getAll()
    .then(x => res.send(x))
    .catch(next)    
});

//get food by id
app.get("/:id", (req, res, next) => {
    food.get(req.params.id) 
    .then(x => res.send(x))
    .catch(next)    
});

//add food
app.post("/addFood", (req, res, next) => {
    food.add(req.body)
    .then(x => res.send(x))
    .catch(next)    
});

//edit food
app.post("/edit", (req, res, next) => {
    food.editPlan(req.body.oldFoodName, req.body.newFoodName, req.body.calories, req.body.carbohydrates, req.body.protein, req.body) 
    .then(x => res.send(x))
    .catch(next)    
});

module.exports = app;

/*
//delete food via id
app.post("/:id", (req, res) => {
    console.log(req.body)
    food.deleteId(req.params.id, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
//delete food via foodName
app.post("/deleteFood", (req, res) => {
    console.log(req.body)
    food.deleteFood(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
*/