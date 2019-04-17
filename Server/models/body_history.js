const conn = require("./mysql_connection");

const model = {
    //Get all body history
    async getAll(cb) {
        return await conn.query("SELECT * FROM Fit_Body_History")
    },
    //Get specific body history by id
    async get(id) {
        const data = conn.query("SELECT * FROM Fit_Body_History WHERE id=?", id);
        if(!data) {
            throw Error("History not found");
        }
        return await data[0];
    },
    //Add new body history
    async add(input) {
        if(input.weight < 1000 && input.height < 1000) {
            const data = conn.query("INSERT INTO Fit_Body_History (weight, height, gender, userName, created_at) VALUES (?)",
                [input.weight, input.height, input.gender, input.userName, new Date()]);
            return await model.get(data.insertId);
        } else {
            throw Error("Outside of normal scope: please verify weight and height.");
        }
    },
    //Edit user body history
    async editBodyHistory(userName, weight, height, gender) {
        const data = conn.query("SELECT 1 FROM Fit_Body_History WHERE userName = ? ORDER BY userName LIMIT 1", [userName]);
        if(data.length = 0)
        {
            throw Error("User not found");
        } else {
            await conn.query("UPDATE Fit_Body_History SET weight = ?, height = ?, gender = ?", [weight, height, gender]);
            return { status: "success", msg: "History Successfully Changed" };
        }
    },
}

module.exports = model;

/* Unnecessary(?) general update will work with same values updating
    //Edit weight
    async editWeight(input, cb) {
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
    //Delete via id
    deleteId(id, cb) {
        conn.query("DELETE FROM Fit_Body_History WHERE id = ?", id, (err, data) => {
            cb(err, data);
        });
    },
    //Delete body history based on name
    deleteBodyHistory(input, data) {
        conn.query("SELECT 1 FROM Fit_Body_History WHERE userName = ? ORDER BY userName LIMIT 1", [[input.userName]],
        (err, data) => {
            if(err) {
                cb(err);
                return;
            };
            if(data.length < 0) {
                cb(Error("Body history not found"));
            } else {
                conn.query("DELETE FROM Fit_Body_History WHERE userName = ?", [[input.userName]],
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
