var express = require('express');
var router = express.Router();
var reg_template = {
  title: 'Student Application Form'

}
/* GET student  page. */
router.get('/', function(req, res, next) {
  res.render('student', {reg_template});
});

module.exports = router;
