const conn = require("./mysql_connection");

const model = {
    //Get all workout plans
    async getAll() {
        return await conn.query("SELECT * FROM Fit_Workout_Plans");
    },

    //Get workout plan based on id
    async get(id) {
        const data = await conn.query("SELECT * FROM Fit_Workout_Plans WHERE id=?", id);
        if(!data) {
            throw Error("User not found");
        }
        return await data[0];
    },
    
    //Add workout plan
    async add(input) {
        const data = conn.query("INSERT INTO Fit_Workout_Plans (planName, created_at) VALUES (?)",
            [input.planName, new Date()],
        );
        return await model.get(data.insertId);
    },

    //Edit workout plan
    async editPlan(oldWorkoutPlan, newWorkoutPlan) {
        const data = conn.query("SELECT 1 FROM Fit_Workout_Plans WHERE planName = ? ORDER BY planName LIMIT 1", oldWorkoutPlan);
            if(data.length == 0) {
                throw Error("Workout not found");
            }
            await conn.query("UPDATE Fit_Workout_Plans SET planName = ? WHERE planName = ?", [newWorkoutPlan, oldWorkoutPlan]);
            return { status: "success", msg: "Workout Plan Successfully Changed" };
    },

    //Link plan to user
    async linkToUser(input)
    {
       await conn.query("INSERT INTO Fit_Users_Plans (userName, planName) VALUES (?)",
            [input.Global.user.userName, newPlan.planName],
        )
        return { status: "success", msg: "Workout Plan Linked to User"}
    }
};

module.exports = model;

/*
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
*/