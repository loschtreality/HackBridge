var express = require('express');
var router = express.Router();
var reg_template = {
  title: 'registration website'

}
/* GET student registration page. */
router.get('/registration', function(req, res, next) {
  res.render('registration', {reg_template});
});

module.exports = router;
