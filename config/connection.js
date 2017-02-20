//requiring some important information
var mysql = require("mysql");
//var password = require("../keys.js");

//creating the connection, connecting to the database, and exporting it
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "g70224933@IIE",
	database: "burgers_db"
});

//make connection

connection.connect(function(err) {
	if (err) throw err;
	console.log("Connection thread: " + connection.threadId);
});

//export connection for ORM use

module.exports = connection;