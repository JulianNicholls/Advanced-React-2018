// Authentication

const jwt = require('jwt-simple');

const User = require('../models/user');
const config = require('../config');

// Return a JWT for the given user
function tokenForUser(user) {
  const timestamp = new Date().getTime();
  return jwt.encode({ sub: user.id, iat: timestamp }, config.secret);
}

exports.signup = (req, res, next) => {
  // Load data from the POST

  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

  // An email address and password are mandatory
  if (!email || !password) {
    return res
      .status(422)
      .send({ error: 'You must provide an email address and password' });
  }

  // See if a user exist swith the given email address

  User.findOne({ email: email }, (err, existingUser) => {
    if (err) return next(err);

    // If so, return an error
    if (existingUser) {
      return res.status(422).send({ error: 'Email is in use' });
    }

    // Otherwise, create a new user
    const user = new User({
      email,
      password,
      name
    });

    user.save((err, data) => {
      if (err) return next(err);

      // Respond to request, indicating that the user was created
      res.json({ token: tokenForUser(user) });
    });
  });
};

exports.login = (req, res, next) => {
  res.json({ success: true });
};
