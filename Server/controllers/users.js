const express = require('express');
const conn = require('../models/mysqp_connection');

const app = express.Router();

app.get("/", (req, res) => {
    conn.query("SELECT * FROM FITTRACK", (err, data) => {
        if(err) throw err;
        res.send(data);
    });
});

module.exports = app;
