const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const express = require('express');
const logger = require('morgan');
const session = require('express-session');
const app = express();
const mainRouter = require('./router/main');
const usersRouter = require('./router/users');

app.use(express.static('public'));
app.set('view engine', 'ejs');

const port = 3000;

app.listen(port, () => console.log('Server up: ' + port) );

app.use('/',mainRouter);
app.use('/users',usersRouter);


app.use((req, res, next) => next(createError(404)));

// ************ error handler ************
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.path = req.path;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});