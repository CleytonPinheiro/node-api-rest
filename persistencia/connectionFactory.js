var mysql = require('mysql')

function createDBConnection(){
    return mysql.createConnection({
        host: 'localhost',
        user:'root',
        password:'',
        database:'payfast'
    });
}

module.exports = function(){
    var dbConnection = createDBConnection;
    return dbConnection;
}
