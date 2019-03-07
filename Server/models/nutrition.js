const conn = require('./mysql_connection');

const model = {
    getAll(cb) {
        conn.query("SELECT * FROM Fit_Daily_Nutrition", (err, data) => {
            cb(err, data);
        });
    },
    add(input, cb) {
        conn.query("INSERT INTO Fit_Daily_Nutrition (calories, carbs, protein, fat) VALUES (?)",
        [[input.calories, input.carbs, input.protein, input.fat]],
        (err, data) => {
            if(err) {
                cb(err);
                returnl
            }
            model.getAll(data.insertId, (err, data) => {
                cb(err, data);
            });
        });
    },
};

module.exports = model;