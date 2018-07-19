// Authentication

const User = require('../models/user');

exports.signup = (req, res, next) => {
  // Load data from the POST

  const email = req.body.email;
  const password = req.body.password;
  const name = req.body.name;

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

      // Respond to request
      res.json({ success: true });
    });
  });
};
