const conn = require("./mysql_connection");

const model = {
    getAll(cb) {
        conn.query("SELECT * FROM Fit_Workout_Plans", (err, data) => {
            cb(err, data);
        });
    },
    get(id, cb) {
        conn.query("SELECT * FROM Fit_Workout_Plans WHERE id=?", (err, data) => {
            cb(err, data);
        });
    },
    add(input, cb) {
//TODO: Data validation
        conn.query("INSERT INTO Fit_Workout_Plans (planName) VALUES (?)",
        [[input.planName]],
        (err, data) => {
            if(err) {
                cb(err);
                return;
            }
            model.get(data.insertID, (err, data) => {
                cb(err, data);
            });
        });
    },
 //TODO: Remove method for custom inserted workouts.  Do not allow deletion of original presets   
};

module.exports = model;