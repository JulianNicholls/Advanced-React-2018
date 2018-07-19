const Authentication = require('./controllers/authentication');
const passport = require('passport');

const passportService = require('./services/passport');

const requireAuth = passport.authenticate('jwt', { session: false });

module.exports = function(app) {
  app.get('/', requireAuth, (req, res) => {
    res.send('Root Success: Authenticated');
  });

  app.post('/signup', Authentication.signup);
};
