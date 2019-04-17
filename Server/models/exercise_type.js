const conn = require("./mysql_connection");

const model = {
    //Get all exercise_types
    async getAll() {
        return await conn.query("SELECT * FROM Fit_Exercise_Types");
    },

    //Get exercise_type based on id
    async get(id) {
        const data = await conn.query("SELECT * FROM Fit_Exercise_Types WHERE id=?", id);
        if(!data) {
            throw Error("Exercise not found");
        }
        return await data[0];
    },

    //Add exercise_type
    async add(input) {
//TODO: Data validation: check if already exists and abnormal values
        const data = await conn.query("INSERT INTO Fit_Exercise_Types (exerciseType, created_at, bodyFocus) VALUES (?)",
            [input.exerciseType, new Date(), input.bodyFocus]);
        return await model.get(data.insertId)
    },

    //Edit exercise_type
    async editType(oldExerciseType, newExerciseType, bodyFocus) {
        const data = await conn.query("SELECT 1 FROM Fit_Exercise_Types WHERE exerciseType = ? ORDER BY exerciseType LIMIT 1", oldExerciseType)
        if(data.length = 0) {
            throw Error("Exercise Type not found");
        } else {
            await conn.query("UPDATE Fit_Exercise_Types SET exerciseType = ?, bodyFocus =? WHERE exerciseType = ?", [newExerciseType, bodyFocus, oldExerciseType])
            return { status: "success", msg: "Exercise Type was Successfully Changed" };    
        }
    }
}
    module.exports = model;

/*    
    //Delete via id
    deleteId(id, cb) {
        conn.query("DELETE FROM Fit_Exercise_Types WHERE id = ?", id, (err, data) => {
            cb(err, data);
        });
    },
    //Delete workout plan based on name
    deleteWorkoutPlan(input, data) {
        conn.query("SELECT 1 FROM Fit_Exercise_types WHERE exerciseType = ? ORDER BY exerciseType LIMIT 1", [[input.exerciseType]],
        (err, data) => {
            if(err) {
                cb(err);
                return;
            };
            if(data.length < 0) {
                cb(Error("Exercise type not found"));
            } else {
                conn.query("DELETE FROM Fit_Exercise_types WHERE exerciseType = ?", [[input.exerciseType]],
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