var express = require('express');
var router = express.Router();

/* GET admin page. */
router.get('/admin', function(req, res, next) {
  res.render('admin', { title: 'admin site' });
});

module.exports = router;
