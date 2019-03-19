const conn = require("./mysql_connection");

const model = {
    //Get all foods
    getAll(cb) {
        conn.query("SELECT * FROM Fit_Foods", (err, data) => {
            cb(err, data);
        });
    },
    //Get food based on id
    get(id, cb) {
        conn.query("SELECT * FROM Fit_Foods WHERE id=?", (err, data) => {
            cb(err, data);
        });
    },
    //Add food
    add(input, cb) {
//TODO: Data validation: check if already exists and abnormal values
        conn.query("INSERT INTO Fit_Foods (foodName, created_at, calories, carbohydrates, protein, fat) VALUES (?)",
        [[input.foodName, new Date(), input.calories, input.carbohydrates, input.protein, input.fat]],
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
    //Edit food
    editPlan(input, cb) {
        var foodName = input.foodName;
        var originalFood = input.originalFood;
        conn.query("SELECT 1 FROM Fit_Users_Foods WHERE foodName = ? ORDER BY foodName LIMIT 1", [[originalFood]],
        (err, data) => {
            if(err) {
                cb(err);
                return;
            };
            if(data.length < 0) {
                cb(Error("Food not found"));
            } else {
                conn.query("UPDATE Fit_Foods SET foodName = ? WHERE foodName = ?", [[foodName, originalFood]],
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
 //TODO: Remove method for food. (Check FK cascade)   
};

module.exports = model;