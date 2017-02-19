//establishing all the required packages

var express = require("express");
var app = express();

var path = require("path");
//static content for the app from the "public" directory
app.use(express.static(process.cwd + "/public"));

//override with POST having ?_method=DELETE
var methodOverride = require("method-override");
app.use(methodOverride("_method"));

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended:false }));

//set handlebars
var handlebars = require("express-handlebars");
app.engine("handlebars", handlebars({defaultLayout: "main"}));
app.set("view engine", "handlebars");

//import routes and give the server access to tehm
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

var PORT = 8080:
app.listen(process.env.PORT || 8080, function(){
	console.log("App listening on PORT" + PORT);

});