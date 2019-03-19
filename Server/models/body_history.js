const conn = require("./mysql_connection");

const model = {
    //Get all body history
    getAll(cb) {
        conn.query("SELECT * FROM Fit_Body_History", (err, data) => {
            cb(err, data);
        });
    },
    //Get specific body history by id
    get(id, cb) {
        conn.query("SELECT * FROM Fit_Body_History WHERE id=?", id, (err, data) => {
            cb(err, data);
        });
    },
    //Add new body history
    add(input, cb) {
//TODO: Data validation check if already exists and abnormal values
        conn.query("INSERT INTO Fit_Body_History (weight, height, gender, userName, created_at) VALUES (?)",
        [[input.weight, input.height, input.gender, input.userName, new Date()]],
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
    //Edit user body history
    editBodyHistory(input, cb) {
        var userName = input.userName;
        var weight = input.weight;
        var height = input.height;
        var gender = input.gender;
        conn.query("SELECT 1 FROM Fit_Body_History WHERE userName = ? ORDER BY userName LIMIT 1", [[userName]],
        (err, data) => {
            if(err) {
                cb(err);
                return;
            };
            if(data.length < 0) {
                cb(Error("Body History not found"));
            } else {
                conn.query("UPDATE Fit_Body_History SET weight = ?, height = ?, gender = ?", [[weight, height, gender]],
                (err, data) => {
                    if(err) {
                        cb(err);
                        return;
                    };
                    model.get(data.insertId, (err, data) => {
                        cb(err, data);
                    });
                });
            };
        });
    },
    //Edit weight
    editWeight(input, cb) {
        conn.query("UPDATE Fit_Body_History SET weight = ? WHERE userName = ?",
        [[input.weight, input.userName]],
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
    //Edit height
    editHeight(input, cb) {
        conn.query("UPDATE Fit_Body_History SET height = ? WHERE userName = ?",
        [[input.height, input.userName]],
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
    //Edit gender
    editGender(input, cb) {
        conn.query("UPDATE Fit_Body_History SET gender = ? WHERE userName = ?",
        [[input.gender, input.userName]],
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
    //TODO: Remove method (check FK cascade)
};

module.exports = model;