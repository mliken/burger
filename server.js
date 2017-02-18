//establishing all the required packages

var express = require("express");
var app = express();

var path = require("path");
app.use(express.static(process.cwd + "/public"));

var methodOverride = require("method-override");
app.use(methodOverride("_method"));

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended:false }));

var handlebars = require("express-handlebars");
app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

var PORT = 8080:
app.listen(process.env.PORT || 8080, function(){
	console.log("App listening on PORT" + PORT);

});