const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: String,
  description: String,
  tech: [String],
  repo: String
});

module.exports = mongoose.model('Project', projectSchema);
