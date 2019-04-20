const conn = require('./mysql_connection');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SALT_ROUNDS = 10;
const JWT_SECRET = process.env.JWT_SECRET || 'some long string..';

const model = {
    //Get all users
    async getAll() {
        return await conn.query("SELECT * FROM Fit_Users");
    },

    //Get specific user by id
    async get(id) {
        const data = await conn.query("SELECT * FROM Fit_Users WHERE id=?", id);
        if(!data){
            throw Error("User not found");
        }
        return await data[0];
    },

    //Add new user (uses bcrypt to hash user passwords)
    async add(input) {
        if(!input.password) {
            throw Error('Password is required');
        }
        if(input.password.length < 8) {
            throw Error('Password must be at least 8 characters');
        }
        //bcrypt hash password
        const hashedPassword = await bcrypt.hash(input.password, SALT_ROUNDS)
        const data = await conn.query("INSERT INTO Fit_Users (userName, password, created_at) VALUES (?)",
            [[input.userName, hashedPassword, new Date()]],
        );
        return await model.get(data.insertId);
    },

    getFromToken(token) {
        return jwt.verify(token, JWT_SECRET);
    },

    //Login (uses bcrypt to compare entered vs saved password hash)
    async login(userName, password) {
        const data = await conn.query("SELECT * FROM Fit_Users WHERE userName = ? ORDER BY userName LIMIT 1", userName)
        if(data.length == 0) {
            throw Error("User not found");
        }
        const x = await bcrypt.compare(password, data[0].password);
        if(x){
            const user = { ...data[0], password: null};
            return { user, token: jwt.sign(user, JWT_SECRET) };
        } else {
            throw Error('Wrong Password');
        }
    },
    //Edit UserName
    async editUserName(userName, password, newUserName) {
        const data = conn.query("SELECT 1 FROM Fit_Users WHERE userName = ? ORDER BY userName LIMIT 1", userName)
        if(data.length = 0) {
            throw Error("User not found");
        }
        const x = bcrypt.compare(password, data[0].password)
        if(x)
        {
            await conn.query("UPDATE Fit_Users SET userName = ?, WHERE userName = ?", [newUserName, userName]);
            return { status: "success", msg: "Username Successfully Changed" };
        } else {
            throw Error('Wrong Password');
        }
    },
    //Change password
    async editPassword(userName, oldPassword, newPassword) {
        const data = await conn.query("SELECT 1 FROM Fit_Users WHERE userName = ?, ORDER BY userName LIMIT 1", userName)
        if(data.length == 0) {
            throw Error("User not found");
        }
        //check oldPassword for match
        if(data[0].password == "" || await bcrypt.compare(oldPassword, data[0].password)) {
            const hashedPassword = await bcrypt.hash(newPassword, SALT_ROUNDS);
            await conn.query("UPDATE Fit_Users SET password = ? WHERE userName = ?", [hashedPassword, userName]);
            return { status: "success", msg: "Password Successfully Changed" };
        } else {
            throw Error('Wrong Password');
        }
    }
};

module.exports = model;

/*
    //Delete via id
    deleteId(id, cb) {
        conn.query("DELETE FROM Fit_Users WHERE id = ?", id, (err, data) => {
            cb(err, data);
            
        });
    },
    //Delete via userName
    deleteUser(input, cb) {
        conn.query("SELECT 1 FROM Fit_Users WHERE userName = ? ORDER BY userName LIMIT 1", [[input.userName]],
        (err, data) => {
            if(err) {
                cb(err);
                return;
            };
            if(data.length < 0) {
                cb(Error("User not found"));
            } else {
                if(bcrypt.compare(input.password, data[0].password)) {
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
            };                         
        });
    },
}; */


