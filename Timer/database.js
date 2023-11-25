import mysql from 'mysql2'

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '1002',
    database: 'foodtracker'
}).promise()

const result = await pool.query("SELECT * FROM foodtracker.foods")

// console.log(result);

console.log(result[0])