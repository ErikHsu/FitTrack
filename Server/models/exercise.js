const conn = require("./mysql_connection");

const model = {
    //Get all exercises
    async getAll(cb) {
        return await conn.query("SELECT * FROM Fit_Exercises");
    },

    //Get exercise based on id
    async get(id) {
        const data = conn.query("SELECT * FROM Fit_Exercises WHERE id=?", id);
        if(!data) {
            throw Error("Exercise not found");
        }
        return await data[0];
    },

    //Add exercise
    async add(input) {
        const data = await conn.query("INSERT INTO Fit_Exercises (exerciseName, created_at) VALUES (?)",
        [input.exerciseName, new Date()]);
           return await model.get(data.insertId);
    },

    //Edit exercise
    async editExercise(oldExerciseName, newExerciseName) {
        const data = conn.query("SELECT 1 FROM Fit_Exercises WHERE exerciseName = ? ORDER BY exerciseName LIMIT 1", oldExerciseName);
        if(data.length < 0) {
            throw Error("Exercise not found");
        } else {
            await conn.query("UPDATE Fit_Exercises SET exerciseName = ? WHERE exerciseName = ?", [oldExerciseName, newExerciseName]);
            return { status: "success", msg: "Exercise Successfully Changed"};
        }
    }
}

module.exports = model;

/*
    //Delete via id
    deleteId(id, cb) {
        conn.query("DELETE FROM Fit_Exercises WHERE id = ?", id, (err, data) => {
            cb(err, data);
        });
    },
    //Delete workout plan based on name
    deleteWorkoutPlan(input, data) {
        conn.query("SELECT 1 FROM Fit_Exercises WHERE exerciseName = ? ORDER BY exerciseName LIMIT 1", [[input.exerciseName]],
        (err, data) => {
            if(err) {
                cb(err);
                return;
            };
            if(data.length < 0) {
                cb(Error("Exercise not found"));
            } else {
                conn.query("DELETE FROM Fit_Exercises WHERE exerciseName = ?", [[input.exerciseName]],
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
*/