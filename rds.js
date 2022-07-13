var mysql = require('mysql');


var rdsUrl = process.env.DB_URL;
var password =  'password';
var user = 'root';

// mysql connection pool
var rdsPool = mysql.createPool({
    connectionLimit : 12,
    host: rdsUrl,
    password: password,
    user: user
});

module.exports.pool = rdsPool;
module.exports.url = rdsUrl;
