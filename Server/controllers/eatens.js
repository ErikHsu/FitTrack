const express = require('express');
const eaten = require("./models/eaten");

const app = express.Router();

app.get("/", (req, res) => {
    eaten.getAll((err, data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.get("/:id", (req, res) => {
    eaten.get(req.params.id, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.post("/", (req, res) => {
    console.log(req.body)
    eaten.add(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.post("/editFood", (req, res) => {
    console.log(req.body)
    eaten.editFood(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});

app.post("/editUser", (req, res) => {
    console.log(req.body)
    eaten.editUser(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});