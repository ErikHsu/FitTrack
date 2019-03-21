const conn = require('./mysql_connection');

const model = {
    //Get all people
    getAll(cb) {
        conn.query("SELECT * FROM Fit_Peoples", (err, data) => {
            cb(err, data);
        });
    },
    //Get specific person by id
    get(id, cb) {
        conn.query("SELECT * FROM Fit_Peoples WHERE id=?", id, (err, data) => {
            cb(err, data);
        });
    },
    //Add person
    //TODO: Data validation, check if already exists and abnormal values
    add(input, cb) {
        conn.query("INSERT INTO Fit_Peoples (fName, lName, addr, created_at, userName) VALUES (?)",
        [[input.fName, input.lName, input.addr, new Date(), input.userName]],
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
    //Edit person
    editPerson(input, cb) {
        var fName = input.fName;
        var lName = input.lName;
        var addr = input.addr;
        var userName = input.userName;
        conn.query("SELECT 1 FROM Fit_Peoples WHERE userName = ? ORDER BY userName LIMIT 1", [[userName]],
        (err, data) => {
            if(err) {
                cb(err);
                return;
            }
            if(data.length < 0) {
                cb("Person not found");
            } else {
                conn.query("UPDATE Fit_Peoples SET fName = ?, lName = ?, address = ? WHERE userName = ?", [[fName, lName, addr, userName]],
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
    //TODO: Remove method (check FK cascade)
};

module.exports = model; 