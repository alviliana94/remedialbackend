const mysql = require ('mysql')

const connect = mysql.createConnection({
    user: 'root',
    password: 'Vya22Feb1994',
    host: 'localhost',
    database: 'remedialbackend',
    port: '3306'
})

module.exports= connect