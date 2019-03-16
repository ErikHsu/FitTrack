const conn = require('./mysql_connection');

const model = {
    getAll(cb) {
        conn.query("SELECT * FROM Fit_Peoples", (err, data) => {
            cb(err, data);
        });
    },
    get(id, cb) {
        conn.query("SELECT * FROM Fit_Peoples WHERE id=?", id, (err, data) => {
            cb(err.data);
        });
    },
    add(input, cb) {
        conn.query("INSERT INTO Fit_Peoples (fName, lName, addr) VALUES (?)",
        [[input.fName, input.lName, input.addr]],
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
    //Edit first and last name
    editName(input, cb) {
        conn.query("UPDATE Fit_Peoples SET fName = ?, lName = ? WHERE fName = ?, lName = ?", [input.newfName, newlName, fName, lName],
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
    //Edit address
    editAddr(input, cb) {
        conn.query("UPDATE Fit_Peoples SET addr = ? WHERE userName = ?", [input.addr, input.userName],
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
};

module.exports = model; 