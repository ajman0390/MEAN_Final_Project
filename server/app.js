var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

// Set Routers
var usersRouter = require('./routes/users');
var leaguesRouter = require('./routes/leagues');
var teamsRouter = require('./routes/teams');
var detailsRouter = require('./routes/details');
var powersRouter = require('./routes/powers');

var app = express();

// enable CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});

const cors = require('cors');
app.use(cors({
  origin: [
    "http://localhost:4200"
  ],
  credentials: true
}));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(session({
  secret: "hca2",
  resave: "true",
  saveUninitialized: "true"
}));

// Set Routes

// http://localhost:3000/users
app.use('/users', usersRouter);
// http://localhost:3000/leagues
app.use('/leagues', leaguesRouter);
// http://localhost:3000/teams
app.use('/teams', teamsRouter); 
app.use('/details', detailsRouter);
// http://localhost:3000/powers
app.use('/powers', powersRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  // res.render('error');
});

module.exports = app;
