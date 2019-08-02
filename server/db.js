const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.DB_USER,
  password: process.env.DB_PSW,
  database: 'pharos',
  host: 'localhost',
  port: 5432
})

module.exports = {
  pool
}