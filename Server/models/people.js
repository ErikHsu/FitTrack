const conn = require('./mysql_connection');

const model = {
    //Get all people
    async getAll() {
        return await conn.query("SELECT * FROM Fit_Peoples")
    },

    //Get specific person by id
    async get(id) {
        const data = conn.query("SELECT * FROM Fit_Peoples WHERE id=?", id);
        if(!data) {
            throw Error("User not found");
        }
        return await data[0];
    },

    //Get person by username
    async getPerson(input) {
        const data = await conn.query("SELECT * FROM Fit_Peoples WHERE userName=?", input.userName);
        if(!data) {
            throw Error("Person not found");
        }
        return data; 
    },
     
    //Add person
    //TODO: Data validation, check if already exists and abnormal values
    async add(input) {
        const data = await conn.query("INSERT INTO Fit_Peoples (fName, lName, created_at, birthday, userName) VALUES (?)",
        [input.fName, input.lName, new Date(), input.birthday, input.userName],
        );
        return await model.get(data.insertId);
    },

    //Edit person
    async editPerson(input) {
            await conn.query("UPDATE Fit_Peoples SET fName = ?, lName = ?, birthday = ? WHERE userName = ?", 
                [input.fName, input.lName, input.birthday, input.userName]);
            return { status: "Success", msg: "Personal Info Successfully Changed" };
        
    },
};

    module.exports = model; 


/*
    //Delete via id
    deleteId(id, cb) {
        conn.query("DELETE FROM Fit_Peoples WHERE id = ?", id, (err, data) => {
            cb(err, data);
        });
    },
    //Delete person based on name
    deletePeople(input, data) {
        conn.query("SELECT 1 FROM Fit_Peoples WHERE userName = ? ORDER BY userName LIMIT 1", [[input.userName]],
        (err, data) => {
            if(err) {
                cb(err);
                return;
            };
            if(data.length < 0) {
                cb(Error("Person not found"));
            } else {
                conn.query("DELETE FROM Fit_Peoples WHERE userName = ?", [[input.userName]],
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