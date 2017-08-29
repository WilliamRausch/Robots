const express = require("express");
const router = express.Router();
const fs = require("fs");
const data = require("../data.js");
let robot;


router.get("/",function(req,res){
 console.log(data.users[1]);
 res.render("index",{robots: data});
});


router.get("/:id",function(req,res){
	id = req.params.id;
	for(i=0;i<data.users.length;i++){
		if(data.users[i].id==id){
			robot = data.users[i];
			console.log(robot);
		}
}
		console.log(robot);

		if(robot.job&&robot.university){
		console.log("this robot has a job!");
	res.render("show", robot);

}else if(robot.university){
	res.render("looking", robot);
}
else{
	res.render("missing", robot);
}
});
module.exports = router;