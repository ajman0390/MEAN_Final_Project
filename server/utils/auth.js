

// Note: email and password values hard-coded for demo only!
var auth = {
  
  authorize: function (username, password) {
    var validUser = this.users.filter((user) => {
      console.log(user)
      return user.user_name === username && user.password === password;
    });

    console.log(users.list())
    if (validUser.length === 1) {
      return true;
    }
    return false;
  }
};

module.exports = {
  auth
};


  
const fs = require('fs');
const dataPath = './data/';

// Get All Users
var getUsers = function ()
{
  try
  {
    var usersString = fs.readFileSync(dataPath + 'users.json');
    return JSON.parse(usersString);
  }
  catch (err)
  {
    return [];
  }
};

// Save User to users.json after validation
var saveUsers = function (users)
{
  fs.writeFileSync(dataPath + 'users.json', JSON.stringify(users));
};

// Insert User into users.json
var insertUser = (username, password, email) =>
{
  var users = getUsers();

  var user = {
    username,
    password,
    email
  };

  // Check for Dupe User
  var duplicateUsers = users.filter((user) =>
  {
    return (user.username === username || user.email === email);
  });

  // Verify if user/email exists
  if (duplicateUsers.length === 0)
  {
    users.push(user);
    saveUsers(users);
    return user;
  }
};

// Update User in users.json
var updateUser = (username, email) =>
{
  let match;

  if (email == undefined || email.trim() == "")
  {
    return;
  }

  var user = {
    username,
    email
  };

  var users = getUsers();

  var duplicateUserEmail = users.filter((user) =>
  {
    return (user.email === email);
  });

  if (duplicateUserEmail.length === 0)
  {
    // Find existing User
    match = users.find(u => u.username == username);

    if (match == null)
    {
      return;
    }
  }

  // Update the User
  match.email = email;

  fs.writeFileSync(dataPath + 'users.json', JSON.stringify(users));

  return true;
};

// Check if User Exists
var authUser = (username, password) =>
{
  var users = getUsers();
  var filteredUsers = users.filter((user) => user.username === username && user.password === password);
  return filteredUsers[0];
};

module.exports = {
  insertUser,
  updateUser,
  getUsers,
  authUser
};