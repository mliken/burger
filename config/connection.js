//requiring some important information
var mysql = require("mysql");
var passcode = require("../keys.js");

//creating the connection, connecting to the database, and exporting it
var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: kee.mysql,
  database: "burgers_db"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connection thread: " + connection.threadId);
});

module.exports = connection;