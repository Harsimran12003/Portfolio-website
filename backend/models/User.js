const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  nationality: String,
  phone: String,
  email: String,
  freelance: String,
  qualification: String,
  github: String,
  languages: [String],  
  about: String          
});

module.exports = mongoose.model('User', userSchema);
