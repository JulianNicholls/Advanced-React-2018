const Authentication = require('./controllers/authentication');

module.exports = function(app) {
  app.get('/', (req, res) => {
    res.send('Root Success');
  });

  app.post('/signup', Authentication.signup);
};
