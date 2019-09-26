var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();
const fs = require('fs');

/* GET all users json. */
router.get('/data', userController.displayAll); 

router.get('/update/data/:id', userController.getUserData);

/* POST login page. */
router.post('/login', userController.postLogin); 

/* POST register page. */
router.post('/register', userController.createUserProfile); 

/* PUT user page. */
router.put('/update/:id', userController.update);

/* DELETE user page. */
router.delete('/delete/:id', userController.deleteUserProfile);

/* GET logout redirect to index page. */
router.get('/logout', function(req, res, next) {
  req.session.user_name = null;
  res.redirect('/');
});

module.exports = router;