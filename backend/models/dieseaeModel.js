const mongoose = require('mongoose');

const diseaseSchema = new mongoose.Schema({
  class_name: {
    type: String,
    required: true,
    unique: true,
  },
  symptoms: {
    type: [String],
    required: true,
  },
  prevention: {
    type: [String],
    required: true,
  },
  cure: {
    type: [String],
    required: true,
  },
});

const Disease = mongoose.model('image-predicted-diseases', diseaseSchema);

module.exports = Disease;
