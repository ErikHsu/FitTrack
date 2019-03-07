const conn = require('./mysql_connection');

const model = {
    getAll(cb) {
        conn.query("SELECT * FROM Fit_Peoples", (err, data) => {
            cb(err, data);
        });
    },
    get(id, cb) {
        conn.query("SELECT * FROM Fit_Peoples WHERE id=?", (err, data) => {
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
};

module.exports = model; 