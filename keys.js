var mysql = require("mysql");

exports.connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "burgers_db"
});

// module.exports = connection;