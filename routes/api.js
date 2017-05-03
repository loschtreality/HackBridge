var express = require('express');
var router = express.Router();

//var bodyParser = require('body-parser')

var child_fn;
var child_ln;
var child_email;
var child_address;
var child_city;

var child_state;
var child_grade;
var child_bday;
var parent_fn;
var parent_ln;

var parent_email;
var phone;
var income;
var walk_home;
var ethnicity;



router.post('/', function(req, res, next) {

	$.ajax({
		type: 'POST',
		url: 'https://demo.docusign.net/restapi/v2/accounts/2953157/envelopes',
		headers:{  "X-DocuSign-Authentication": { "Username":"kevinlay689@yahoo.com", "Password":"Kevinlay1!","IntegratorKey":"6a4e020b-178a-4cd7-a2b2-c77c0c01bac1" },
		"Content-Type":"application/json"
		},
		body:{
  			"templateId": "9fd73e2d-833f-479c-bf5f-b8eb8185fcc8"
		},
		success: function() {
			console.log("success");
			res.sendStatus(200);
		},
		error: function() {
			console.log("failure");
		}
	});
	
	// child_fn = req.body.child_fn;
	// child_ln = req.body.child_ln;
	// child_email = req.body.child_email;
	// child_address = req.body.child_address;
	// child_city = req.body.child_city;

	// child_state = req.body.child_state;
	// child_grade = req.body.child_grade;
	// child_bday = req.body.child_bday;
	// parent_fn = req.body.parent_fn;
	// parent_ln = req.body.parent_ln;

	// parent_email = req.body.parent_email;
	// phone = req.body.phone;
	// income = req.body.income;
	// walk_home = req.body.walk_home;
	// ethnicity = req.body.ethnicity;

	//var ch = JSON.parse(req);
	console.log(child_fn);

	//res.sendStatus(200);
});

module.exports = router;