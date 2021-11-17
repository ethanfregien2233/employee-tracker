const inquirer = require("inquirer")
const mysql = require("mysql")
const consoleTable = require("console.table")
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    database: "employee_tracker"
  });

connection.connect(function(err) {
    if (err) throw err
    console.log("Connected as Id" + connection.threadId)
});
