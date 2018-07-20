// User model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// User Schema

const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
  name: String
});

// On save, encrypt the password

userSchema.pre('save', function(next) {
  const user = this;

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, null, (err, hash) => {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

// Compare the current user password with a candidate password

userSchema.methods.comparePassword = function(candidate, callback) {
  bcrypt.compare(candidate, this.password, (err, isMatch) => {
    if (err) return callback(err);

    callback(null, isMatch);
  });
};

// Create the model class
const UserClass = mongoose.model('user', userSchema);

// Export it
module.exports = UserClass;
