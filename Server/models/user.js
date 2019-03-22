const conn = require('./mysql_connection');
const bcrypt = require('bcrypt');

const model = {
    //Get all users
    getAll(cb) {
        conn.query("SELECT * FROM Fit_Users", (err, data) => {
            cb(err, data);
        });
    },
    //Get specific user by id
    get(id, cb) {
        conn.query("SELECT * FROM Fit_Users WHERE id=?", id, (err, data) => {
            cb(err, data);
        });
    },
    //Add new user (uses bcrypt to hash user passwords)
    add(input, cb) {
        if(input.password.length < 8) {
            cb(Error('Password must be at least 8 characters'))
        }
        //bcrypt hash password
        var hash = bcrypt.hashSync(input.password, 10);
                
        conn.query("INSERT INTO Fit_Users (userName, password, created_at) VALUES (?)",
        [[input.userName, hash, new Date()]],

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
    //Login (uses bcrypt to compare entered vs saved password hash)
    login(input, cb) {
        conn.query("SELECT 1 FROM Fit_Users WHERE userName = ? ORDER BY userName LIMIT 1", [[input.userName]],
        (err, data) => {
            if(err) {
                cb(err);
                return;
            }
            if(data.length <= 0) {
                cb("User not found");
            } else {
                conn.query("SELECT password FROM Fit_Users WHERE userName =?", [[input.userName]], 
                (err, data) => {
                    if(err) {
                        cb(err);
                        return;
                    }
                    bcrypt.compare(input.password, data[0].password, (err, data) => {
                        cb(err, data);
                    });                    
                });
            };
        });    
    },
    //Get password via userName
//TODO: change function to account for hashing
    getPass(input, cb) {
        conn.query("SELECT password FROM Fit_Users WHERE userName = ?", [[input.userName]],
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
    //Edit User
//TODO: edit function to account for hashing
    edit(input, cb) {
        var userName = input.userName;
        var password = input.password;
        conn.query("SELECT 1 FROM Fit_Users WHERE userName = ? ORDER BY userName LIMIT 1", [[userName]],
        (err, data) => {
            if(err) {
                cb(err);
                return;
            }
            if(data.length < 0) {
                cb("User not found");
            } else {
                conn.query("UPDATE Fit_Users SET userName = ?, password = ? WHERE userName = ?", [[userName, password, userName]],
                (err, data) => {
                    if(err) {
                        cb(err);
                        return;
                    }   
                });
            };
        });
    },
    //Change password
//TODO: edit function to account for hashing
    editPassword(input, cb) {
        var userName = input.userName;
        var password = input.password;
        conn.query("SELECT 1 FROM Fit_Users WHERE userName = ? ORDER BY userName LIMIT 1", [[userName]],
        (err, data) => {
            if(err) {
                cb(err);
                return;
            };
            if(data.length < 0) {
                cb(Error("User not found"));
            } else {
                if(password.length < 8) {
                    cb(Error("Password must be at least 8 characters"));
                };
                conn.query("UPDATE Fit_Users SET password = ? WHERE userName = ?", [[password, userName]],
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
    //Change userName
    editUserName(input, cb) {
        var newUserName = input.newUserName;
        var userName = input.userName;
        conn.query("SELECT 1 FROM Fit_Users WHERE userName = ? ORDER BY userName LIMIT 1", [[userName]],
        (err, data) => {
            if(err) {
                cb(err);
                return;
            };
            if(data.length < 0) {
                cb(Error("User not found"));
            } else {
                conn.query("UPDATE Fit_Users SET userName = ? WHERE userName = ?", [[newUserName, userName]],
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
    //Delete via id
    deleteId(id, cb) {
        conn.query("DELETE FROM Fit_Users WHERE id = ?", id, (err, data) => {
            cb(err, data);
            
        });
    },
    //Delete via userName
//TODO: password verification
    deleteUser(input, data) {
        conn.query("SELECT 1 FROM Fit_Users WHERE userName = ? ORDER BY userName LIMIT 1", [[input.userName]],
        (err, data) => {
            if(err) {
                cb(err);
                return;
            };
            if(data.length < 0) {
                cb(Error("User not found"));
            } else {
                conn.query("DELETE FROM Fit_Users WHERE userName = ?", [[input.userName]],
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

module.exports = model;
