// Establishing connection with database
const mysql = require('mysql')
    require('dotenv').load();

const conn = mysql.createPool({
    host: process.env.VUE_APP_MYSQL_HOST,
    user: process.env.VUE_APP_MYSQL_USER,
    password: process.env.VUE_APP_MYSQL_PASSWORD, 
    database: process.env.VUE_APP_MYSQL_DB,
    connectionLimit: 10,
    //insecureAuth: true
});

module.exports = conn; 
