var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');

// Set Routers
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var leaguesRouter = require('./routes/leagues');
var teamsRouter = require('./routes/teams');
var detailsRouter = require('./routes/details');
var memberRouter = require('./routes/member');
var powersRouter = require('./routes/powers');

var app = express();

// enable CORS
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  next();
});



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
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/leagues', leaguesRouter);
app.use('/teams', teamsRouter); 
app.use('/details', detailsRouter);
app.use('/member', memberRouter);
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
  res.render('error');
});

module.exports = app;