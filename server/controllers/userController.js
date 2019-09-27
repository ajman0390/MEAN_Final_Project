const service = require('../services/service');

var userController = {};

userController.displayAll = (req, res) => {
  service.getAllUsers()
    .then((users) => {
      if (users) {
        res.json(users);
      } else {
        res.end('No Users found.');
      }
    })
    .catch((err) => {
      console.log(`Listing Users error: ${err}`);
      res.end('Listing Users error.');
    });
};

// GET User Data: 
// http://localhost:3000/users/:id
userController.getUserData = (req, res) => {
  console.log(req.params.id)
  let userId = req.params.id;
  service.getUserData(userId)
    .then((user) => {
      if (user == null) {
        res.end('Updating User error.');
      }  
      res.json(user); 
    })
    .catch((err) => {
      console.log(`Updating User error: ${err}`);
      res.end('Updating User error.');
    });
};

// POST User Login: 
// http://localhost:3000/users/login
userController.postLogin = (request, response) => {
  console.log(request.body.password);
  service.authUser(
    { USER_NAME: request.body.user_name, PASSWORD: request.body.password }
  )
    .then((user) => {
      if (user == null) {
        response.statusCode = 403;
        request.session.userID = null;
        // request.session.isAdmin = null;
        response.end('Invalid Creds.');
      }
      response.statusCode = 200;
      request.session.userID = user.ID;
      // request.session.isAdmin = user.IS_ADMIN;
      console.log(user.ID)
      response.json(user);
    })
    .catch((err) => {
      console.log(`Reading User error: ${err}`);
      response.end('Reading User error.');
    });
};

// POST Register User: 
// http://localhost:3000/users/register
userController.createUserProfile = (request, response) => {
  service.createUserProfile(
    { USER_NAME: request.body.user_name, PASSWORD: request.body.password, EMAIL: request.body.email }
  )
    .then((user) => {
      response.json(user);
      window.location.href = '/users/login';
    })
    .catch((err) => {
      console.log(`Creating User error: ${err}`);
      response.statusCode = 403; // Forbidden
      response.end('Creating User error.');
    });
};

// PUT: User Update:
// http://localhost:3000/users/:id
userController.update = (req, res) => {
  service.update({
          userId: req.params.id,
          user_name: req.body.user_name,
          password: req.body.password,
          email: req.body.email
      })
      .then((user) => {
          res.json(user);
      })
      .catch((err) => {
          console.log(`Updating User error: ${err}`);
          res.end('Updating User error.');
      });
};

// DELETE: User:
// http://localhost:3000/users/:id
userController.deleteUserProfile = (req, res) => {
  let userId = req.params.id;
  service.deleteUserProfile(userId)
      .then((user) => {
          if (user) {
              res.json(user);
          } else {
              res.end('User not updated.');
          }
      })
      .catch((err) => {
          console.log(`Deleting User error: ${err}`);
          res.end('Deleting User error.');
      });
};

// GET: Logout
userController.getLogout = (req, res) =>
{
    req.session.userID = null;
    req.session.isAdmin = null;
    res.redirect('/');
};

module.exports = userController;