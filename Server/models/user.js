const conn = require('./mysql_connection');

const model = {
    //Get all users
    getAll(cb) {
        conn.query("SELECT * FROM Fit_Users", (err, data) => {
            cb(err, data);
        });
    },
    //Get specific user by id
    get(id, cb) {
        conn.query("SELECT * FROM Fit_Users WHERE Id=?", id, (err, data) => {
            cb(err, data);
        });
    },
    //Add new user (registration)
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
    //Change password
    changePass(input, cb) {
        if(input.password.length < 8) {
            cb(Error('Password must be at least 8 characters'))
        }
        conn.query("UPDATE Fit_Users SET password = ? WHERE userName = ?", [input.password, input.userName],
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
    //Change userName
    changeName(input, cb) {
        conn.query("UPDATE Fit_Users SET userName = ? WHERE userName = ?", [input.newUserName, input.userName],
        (err, data) => {
            if(err) {
                cb(err);
                return;
            }
            model.get(data.insertId, (err, data) => {
                cb(err, data);
            });
        });
    }
}

module.exports = model;
