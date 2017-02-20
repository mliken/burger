//In models, make a burger.js file.

//Inside burger.js, import orm.js into burger.js

//Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.

//Export at the end of the burger.js file.


var express = require("express");

var orm = require("../config/orm.js");

var burger ={
	all: function(callback){
		orm.all("burgers", function(result){
			callback (result);
		});
	},

	//the variables cols and vals are arrays
	create: function(objColumnVals, values, callback){
		orm.create("burgers", values, function(result){
			callback(result);
		});
	},
	update:function(objColumnVals, condition, callback){
		orm.update("burgers", condition, function(result){
			callback(result);
		});
	},
	delete:function(condition,cb){
		orm.delete("burgers",condition,function(res){
			cb(res);
		});
	}

};
//export the database functions for the controller
module.exports = burger;

