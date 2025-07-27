const mongoose = require('mongoose');

const eduExpSchema = new mongoose.Schema({
  institution: String,
  degree: String,
  year: String
});

module.exports = mongoose.model('EduExp', eduExpSchema);
