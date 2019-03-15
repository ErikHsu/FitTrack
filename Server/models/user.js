const conn = require('./mysql_connection');

const model = {
    getAll(cb) {
        conn.query("SELECT * FROM Fit_Users", (err, data) => {
            cb(err, data);
        });
    },
    get(id, cb) {
        conn.query("SELECT * FROM Fit_Users WHERE Id=?", id, (err, data) => {
            cb(err, data);
        });
    },
    add(input, cb) {
        if(input.password.length < 8) {
            cb(Error('Password must be at least 8 characters'))
        }
        conn.query("INSERT INTO Fit_Users (userName, password, created_at) VALUES (?)",
        [[input.userName, input.password, new Date()]],

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