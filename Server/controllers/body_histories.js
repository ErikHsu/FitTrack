const express = require('express');
const body_history = require('../models/body_history');

const app = express.Router();

//get all
app.get("/", (req, res, next) => {
    body_history.getAll()
    .then(x => res.send(x))
    .catch(next)
});
//get body history via id
app.get("/:id", (req, res,next) => {
    body_history.get(id)
    .then(x => res.send(x))
    .catch(next)
});
//add new body history
app.post("/", (req, res, next) => {
    body_history.add(req.body)
    .then(x => res.send(x))
    .catch(next)
});
//edit body history of user
app.post("/editBody", (req, res, next) => {
    body_history.editBodyHistory(req.body)
    .then(x => res.send(x))
    .catch(next)
});

module.exports = app;

/*
//edit weight
app.post("/editWeight", (req, res) => {
    console.log(req.body)
    body_history.editWeight(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
//edit height
app.post("/editHeight", (req, res) => {
    console.log(req.body)
    body_history.editHeight(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
//edit gender
app.post("/editGender", (req, res) => {
    console.log(req.body)
    body_history.editGender(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
//delete via id
app.post("/:id", (req, res) => {
    console.log(req.body)
    body_history.deleteId(req.params.id, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
//delete via userName
app.post("/deleteBodyHistory", (req, res) => {
    console.log(req.body)
    body_history.deleteBodyHistory(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
*/