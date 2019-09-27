var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();
const fs = require('fs');

/* GET all users */
// http://localhost:3000/users
router.get('/', userController.displayAll); 

// http://localhost:3000/users/:id
router.get('/:id', userController.getUserData);

/* POST login page. */
// http://localhost:3000/users/login
router.post('/login', userController.postLogin); 

/* POST register page. */
// http://localhost:3000/users/register
router.post('/register', userController.createUserProfile); 

/* PUT user page. */
// http://localhost:3000/users/:id
router.put('/:id', userController.update);

/* DELETE user page. */
// http://localhost:3000/users/:id
router.delete('/:id', userController.deleteUserProfile);

/* GET logout redirect to index page. */
// http://localhost:3000/
router.get('/logout', userController.getLogout);

module.exports = router;