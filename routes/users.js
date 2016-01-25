var express = require('express');
var bouncer = require('../lib/bouncer');
var router = express.Router();


router.get('/:user/profile', function(req, res, next) {
  res.render('users/profile', {profileUser: req.params.user})
});

router.get('/', bouncer.bouncer);
router.get('/', bouncer.userchecker);

router.get('/', function(req, res, next) {
  res.render('users/index')
});

router.get('/:username', function(req, res, next) {
  res.render('users/show', {username: req.params.username})
});

router.get('/:someUser/edit', function(req, res, next) {
  res.render('users/edit', {user: req.params.someUser})
});


module.exports = router;
