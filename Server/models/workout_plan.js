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
            model.get(data.insertID, (err, data) => {
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
 //TODO: Remove method for custom inserted workouts.  Do not allow deletion of original presets. (Check FK cascade)   
};

module.exports = model;