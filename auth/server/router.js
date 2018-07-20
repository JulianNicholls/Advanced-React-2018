const Authentication = require('./controllers/authentication');
const passport = require('passport');

require('./services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireLogin = passport.authenticate('local', { session: false });

module.exports = app => {
  app.get('/', requireAuth, (req, res) => {
    res.send('Root Success: Authenticated');
  });

  app.post('/signup', Authentication.signup);
  app.post('/login', requireLogin, Authentication.login);
};
