const express = require('express');
const user = require('../models/user');

const app = express.Router();

//get all
app.get("/", async (req, res, next) => {
    user.getAll()
    .then(x => res.send(x))
    .catch(next)
});
//get via id
app.get("/:id", (req, res, next) => {
    user.get(req.params.id)
    .then(x => res.send(x))
    .catch(next)
});
//add user
app.post("/addUser", (req, res, next) => {
    user.add(req.body)
    .then(x => res.send(x))
    .catch(next)
});
//login
app.post("/login", (req, res, next) => {
    user.login(req.body.userName, req.body.password)
    .then(x => res.send(x))
    .catch(next)
});

//edit username
app.post("/editUserName", (req, res, next) => {
    user.editUserName(req.body.userName, req.body.password, req.body.newUserName)
    .then(x => res.send(x))
    .catch(next)
});
//edit password
app.post("/editPassword", (req, res, next) => {
    user.editPassword(req.body.userName, req.body.oldPassword, req.body.newPassword)
    .then(x => res.send(x))
    .catch(next)
});

module.exports = app;

/*
//delete via id
app.post("/:id", (req, res) => {
    console.log(req.body)
    user.deleteId(req.params.id, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
//Delete via username
app.post("/deleteUser", (req, res) => {
    console.log(req.body)
    user.deleteUser(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});
*/
