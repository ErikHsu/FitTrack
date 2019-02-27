const conn = require('./mysql_connection');

const model = {
    getAll(cb){
        conn.query("SELECT * FROM fit_users", (err, data) => {
            cb(err, data);
        });
    },
    get(id, cb){

    },
    add(input, cb){
        conn.query("INSERT INTO fit_users ( )"), //TODO
        [[]],
        (err, data) => {
            cb(err, data);
        };
    },
};

module.exports = model;