const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local');

const User = require('../models/user');
const config = require('../config');

// Create local strategy
const localOptions = { usernameField: 'email' };
const localLogin = new LocalStrategy(localOptions, (email, password, done) => {
  // Verify the user exists, MUST USE findOne(), NOT find()
  User.findOne({ email: email }, (err, user) => {
    // findOne finds 1, find find an array
    if (err) return done(err, false);

    // No user, call done() without a user
    if (!user) return done(null, false);

    // User found, check password
    user.comparePassword(password, (err, isMatch) => {
      if (err) return done(err);

      // Password is OK, call done() with user
      if (isMatch) return done(null, user);

      // Password doesn't match, call done() with no user
      return done(null, false);
    });
  });
});

// Set up options of JWT strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  // See if the user ID in the payload exists
  User.findById(payload.sub, (err, user) => {
    if (err) return done(err, false);

    // If it does, call done() with the user
    if (user) return done(null, user);

    // Otherwise, call done() with no user
    return done(null, false);
  });
});

// Tell passport to use these strategies
passport.use(jwtLogin);
passport.use(localLogin);
