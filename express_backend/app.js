const express = require('express');
const logger = require("morgan");
const cors = require('cors');
const path = require('path');
const createError = require('http-errors');

const routes = require('./routes');

const app = express();

app.use(logger("dev"));
app.use(cors({ origin: true }));

// need following 2 middleware for sending data (post/put req)
app.use(express.json()); // recognize req as JSON object
app.use(express.urlencoded({ extended: false })); // recognize req as STR/ARR, no nested obj

app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// app.use((err, req, res, next) => {
//   next(createError(404))
// });

app.use((err, req, res, next) => {
  console.log("ERROR", err.status);
  res.status(err.status || 500);
  if (err.status === 401) {
    res.set('WWW-Authenticate', 'Bearer');
  };

  res.json({
    message: err.message,
    error: JSON.parse(JSON.stringify(err))
  })
})

// Error handler to log errors.
// app.use((err, req, res, next) => {
//   if (process.env.NODE_ENV === 'production') {
//     // TODO Log the error to the database.
//   } else {
//     console.error(err);
//   }
//   next(err);
// });



module.exports = app;