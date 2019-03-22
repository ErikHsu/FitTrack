const conn = require("./mysql_connection");

const model = {
    //Get all workout plans
    getAll(cb) {
        conn.query("SELECT * FROM Fit_Workout_Plans", (err, data) => {
            cb(err, data);
        });
    },
    //Get workout plan based on id
    get(id, cb) {
        conn.query("SELECT * FROM Fit_Workout_Plans WHERE id=?", (err, data) => {
            cb(err, data);
        });
    },
    //Add workout plan
    add(input, cb) {
//TODO: Data validation: check if already exists and abnormal values
        conn.query("INSERT INTO Fit_Workout_Plans (planName, created_at) VALUES (?)",
        [[input.planName, new Date()]],
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
    //Edit workout plan
    editPlan(input, cb) {
        var workoutPlan = input.workoutPlan;
        var originalPlan = input.originalPlan;
        conn.query("SELECT 1 FROM Fit_Workout_Plans WHERE planName = ? ORDER BY planName LIMIT 1", [[originalPlan]],
        (err, data) => {
            if(err) {
                cb(err);
                return;
            };
            if(data.length < 0) {
                cb(Error("Workout not found"));
            } else {
                conn.query("UPDATE Fit_Workout_Plans SET planName = ? WHERE planName = ?", [[workoutPlan, originalPlan]],
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
    //Delete via id
    deleteId(id, cb) {
        conn.query("DELETE FROM Fit_Workout_Plans WHERE id = ?", id, (err, data) => {
            cb(err, data);
        });
    },
    //Delete workout plan based on name
    deleteWorkoutPlan(input, data) {
        conn.query("SELECT 1 FROM Fit_Workout_Plans WHERE planName = ? ORDER BY planName LIMIT 1", [[input.planName]],
        (err, data) => {
            if(err) {
                cb(err);
                return;
            };
            if(data.length < 0) {
                cb(Error("Workout not found"));
            } else {
                conn.query("DELETE FROM Fit_Workout_Plans WHERE planName = ?", [[input.planName]],
                (err, data) => {
                    if(err) {
                        cb(err);
                        return;
                    }
                    model.get(data.insertId, (err, data) => {
                        cb(err, data);
                    });
                });
            };
        });
    }, 
};

module.exports = model;