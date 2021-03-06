const config = require("./db-config-local.json")
const mysql = require("mysql")
const { readFileSync } = require("fs")
const { join } = require("path")

const sql = readFileSync(join(__dirname, "createTables.sql"), "utf8")

const pool = mysql.createPool({
  connectionLimit : 10,
  multipleStatements: true,
  ...config
});

pool.query(sql, (err, results) => {
  if (err) {
    console.log(err)
  } else {
    console.log(results)
  }
})