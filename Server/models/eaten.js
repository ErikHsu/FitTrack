const conn = require('./mysql_connection');

const model = {
    getAll(cb) {
        conn.query("SELECT * FROM Fit_Eaten", (err, data) => {
            cb(err, data);
        });
    },
    get(id, cb) {
        conn.query("SELECT * FROM Fit_Eaten", id, (err, data) => {
            cb(err, data);
        });
    },
    //adding food entry 
    add(input, cb) {
    /*  Validation: TODO  
        conn.query("INSERT INTO Fit_Eaten (userName, foodName) VALUES (?) \
        WHERE EXISTS (SELECT userName FROM Fit_Users WHERE userName = ? \
        AND WHERE EXISTS (Select foodName FROM Fit_Foods WHERE foodName = ?", 
        [[input.userName, input.foodName, input.Fit_Eaten.userName, input.Fit_Eaten.foodName]], 
    */
        conn.query("INSERT INTO Fit_Eaten (userName, foodName) VALUES (?)",
        [[input.userName, input.foodName]],
        (err, data) => {
            if(err) {
                cb(err);
                return;
            }
            model.get(data.insertPeople, (err, data) => {
                cb(err, data);
            });  
        });
    },
    //edit food eaten
    editFood(input, cb) {
        conn.query("UPDATE Fit_Eaten SET foodName = ?", [[input.newFoodName]],
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
    //edit who ate
    editUser(input, cb) {
        conn.query("UPDATE Fit_Eaten SET userName = ?", [[input.userName]],
        (err, data) => {
            if(err) {
                cb(err);
                return;
            }
            model.get(data.insertId, (err, data) => {
                cb(err, data);
            });
        });
    }


};