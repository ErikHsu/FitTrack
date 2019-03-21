const conn = require("./mysql_connection");

const model = {
    //Get all exercises
    getAll(cb) {
        conn.query("SELECT * FROM Fit_Exercises", (err, data) => {
            cb(err, data);
        });
    },
    //Get exercise based on id
    get(id, cb) {
        conn.query("SELECT * FROM Fit_Exercises WHERE id=?", (err, data) => {
            cb(err, data);
        });
    },
    //Add exercise
    add(input, cb) {
//TODO: Data validation: check if already exists and abnormal values
        conn.query("INSERT INTO Fit_Exercises (exerciseName, created_at) VALUES (?)",
        [[input.exerciseName, new Date()]],
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
    //Edit exercise
    editExercise(input, cb) {
        var exerciseName = input.exerciseName;
        var originalExercise = input.originalExercise;
        conn.query("SELECT 1 FROM Fit_Exercises WHERE exerciseName = ? ORDER BY exerciseName LIMIT 1", [[originalExercise]],
        (err, data) => {
            if(err) {
                cb(err);
                return;
            };
            if(data.length < 0) {
                cb(Error("Exercise not found"));
            } else {
                conn.query("UPDATE Fit_Exercises SET exerciseName = ? WHERE exerciseName = ?", [[exerciseName, originalExercise]],
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