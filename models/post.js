'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = Schema({
  title: String,
  picture: String,
  description: String,
  contentPost: String,
  category: {
    type: String,
    enum: ['develop', 'hag', 'jodie']
  },
  date: { type: Date, default: Date.now() },
  postit: Boolean,
  likes: Boolean
});

module.exports = mongoose.model('Post', PostSchema);
