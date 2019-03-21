const express = require('express');
const user = require('../models/user');

const app = express.Router();

//get all
app.get("/", (req, res) => {
    user.getAll((err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
//get via id
app.get("/:id", (req, res) => {
    user.get(req.params.id, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
//add user
app.post("/addUser", (req, res) => {
    console.log(req.body)
    user.add(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
//login
app.post("/login", (req, res) => {
    user.login(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
//get password
app.get("/:userName", (req, res) => {
    user.getPass(req.params.userName, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
//edit user
app.post("/edit", (req, res) => {
    console.log(req.body)
    user.edit(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
//edit password
app.post("/editPassword", (req, res) => {
    console.log(req.body)
    user.editPassword(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
//edit username
app.post("/editUserName", (req, res) => {
    console.log(req.body)
    user.editUserName(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});

module.exports = app;