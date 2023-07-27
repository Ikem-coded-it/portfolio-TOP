const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  screenshotURL: {
    type: String,
    trim: true,
  },
  liveURL: {
    type: String,
    required: true,
    trim: true,
  },
  codeURL: {
    type: String,
    required: true,
    trim: true,
  },
  technologies: {
    type: [String],
    required: true
  }
})

module.exports = mongoose.model('Project', projectSchema);