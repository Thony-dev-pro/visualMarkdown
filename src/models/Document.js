const mongoose = require('mongoose');

const documentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  last_updated: {
    type: Date,
    default: Date.now
  },
  description: {
    type: String,
    default: ''
  },
  hashtag: [{
    type: String
  }],
  content: {
    type: String,
    default: ''
  }
});

module.exports = mongoose.model('Document', documentSchema);