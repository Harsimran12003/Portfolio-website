const mongoose = require('mongoose');

const educationSchema = new mongoose.Schema({
  course: String,           
  institution: String,
  duration: String          
});

module.exports = mongoose.model('Education', educationSchema);
