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

userController.getUserData = (req, res) => {
  console.log(req.params.id)
  let userId = req.params.id;
  service.getUserData(userId)
    .then((user) => {
      if (user == null) {
        res.end('Updating User error. dddd');
      }  
      res.json(user); 
    })
    .catch((err) => {
      console.log(`Updating User error: ${err}`);
      res.end('Updating User error.');
    });
};

userController.postLogin = (request, response) => {
  console.log(request.body.password);
  service.authUser(
    { USER_NAME: request.body.user_name, PASSWORD: request.body.password }
  )
    .then((user) => {
      if (user == null) {
        response.statusCode = 403;
        // sessionStorage.setItem("user_name", null)
        request.session.user_name = null;
        response.end('Invalid Creds.');
      }
      response.statusCode = 200;
      response.json(user);
      // sessionStorage.setItem("user_name", request.body.user_name);
      session.user_name = user.USER_NAME;
      session.userId = user.ID;
      console.log(user.ID)
      
      
    })
    .catch((err) => {
      console.log(`Reading User error: ${err}`);
      response.end('Reading User error.');
    });
};

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

// PUT: http://localhost:3000/users/update/:id
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

// DELETE: http://localhost:3000/users/delete/:id
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

module.exports = userController;