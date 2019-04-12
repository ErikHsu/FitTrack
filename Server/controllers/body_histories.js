const express = require('./node_modules/express');
const body_history = require('../models/body_history');

const app = express.Router();

//get all
app.get("/", (req, res) => {
    body_history.getAll((err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
//get body history via id
app.get("/:id", (req, res) => {
    body_history.get((err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
//add new body history
app.post("/", (req, res) => {
    console.log(req.body)
    body_history.add(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
//edit body history of user
app.post("/edit", (req, res) => {
    console.log(req.body)
    body_history.editBodyHistory(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
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

module.exports = app;