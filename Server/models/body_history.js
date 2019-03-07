const conn = require("./mysql_connection");

const model = {
    getAll(cb) {
        conn.query("SELECT * FROM Fit_Body_History", (err, data) => {
            cb(err, data);
        });
    },
    get(id, cb) {
        conn.query("SELECT * FROM Fit_Body_History WHERE id=?", (err, data) => {
            cb(err, data);
        });
    },
    add(input, cb) {
//TODO: Data validation for abnormal values
        conn.query("INSERT INTO Fit_Body_History (weight, height, gender) VALUES (?)",
        [[input.weight, input.height, input.gender]],
        (err, data) => {
            if(err) {
                cb(err);
                return;
            }
            model.get(data.insertId, (err, data) => {
                cb(err, data);
            });
        });
    },
};

module.exports = model;