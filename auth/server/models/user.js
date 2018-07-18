// User model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// User Schema

const userSchema = new Schema({
  email: { type: String, unique: true, lowercase: true },
  password: String,
  name: String
});

// Create the model class

const modelClass = mongoose.model('user', userSchema);

// Export it

module.exports = modelClass;
