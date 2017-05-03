var express = require('express');
var router = express.Router();

/* GET user show page. */
router.get('/', function(req, res, next) {
  var dummyObj = { // replace this with call to database
    first_name: "michael",
    last_name: "loren",
    student_email: "test@test.com",
    student_mobile: "7143372107",
    student_street: "1234 Miracle Mile",
    city_state: "Los Angeles, CA",
    student_zip: "94103",
    grade: "7",
    applicant_school: "Hack Academy",
    birth_month: "Feb",
    birth_day: "12",
    birth_year: "2010",
    guardian_fullname: "laura loren",
    guardian_email: "parent@test.com",
    guardian_workplace: "DocuSign",
    guardian_home_number: "85129391825",
    guardian_mobile_number: "85129391825",
    guardian_work_number: "85129391825",
    date_signed: "2/2/2017",
    essay_1: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    essay_2: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    essay_3: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    interest_1: "Computer Science",
    interest_2: "Math",
    interest_3: "Chemistry",
  }

  res.render('userShow', dummyObj);
});


module.exports = router;
