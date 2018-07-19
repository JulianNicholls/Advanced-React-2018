const passport = require('passport');
const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');

const User = require('../models/user');
const config = require('../config');

// Set up options of JWT strategy
const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: config.secret
};

// Create JWT strategy
const jwtLogin = new JwtStrategy(jwtOptions, (payload, done) => {
  console.log({ payload });

  // See if the user ID in the payload exists
  User.findById(payload.sub, (err, user) => {
    if (err) return done(err, false);

    // If it does, call done() with the user
    if (user) return done(null, user);

    // Otherwise, call done() with no user
    return done(null, false);
  });
});

// Tell passport to use this strategy
passport.use(jwtLogin);
