const conn = require("./mysql_connection");

const model = {
    //Get all exercise_types
    getAll(cb) {
        conn.query("SELECT * FROM Fit_Exercise_Types", (err, data) => {
            cb(err, data);
        });
    },
    //Get exercise_type based on id
    get(id, cb) {
        conn.query("SELECT * FROM Fit_Exercises_Types WHERE id=?", (err, data) => {
            cb(err, data);
        });
    },
    //Add exercise_type
    add(input, cb) {
//TODO: Data validation: check if already exists and abnormal values
        conn.query("INSERT INTO Fit_Exercise_Types (exerciseType, created_at, bodyFocus) VALUES (?)",
        [[input.exerciseName, new Date(), input.bodyFocus]],
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
    //Edit exercise_type
    editType(input, cb) {
        var exerciseType = input.exerciseType;
        var originalType = input.originalType;
        var bodyFocus = input.bodyFocus;
        conn.query("SELECT 1 FROM Fit_Plans_Exercises WHERE exerciseType = ? ORDER BY exerciseType LIMIT 1", [[originalExercise]],
        (err, data) => {
            if(err) {
                cb(err);
                return;
            };
            if(data.length < 0) {
                cb(Error("Exercise Type not found"));
            } else {
                conn.query("UPDATE Fit_Exercise_Types SET exerciseType = ?, bodyFocus =? WHERE exerciseType = ?", [[exerciseType, bodyFocus, originalType]],
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
 //TODO: Remove method for exercise. (Check FK cascade)   
};

module.exports = model;