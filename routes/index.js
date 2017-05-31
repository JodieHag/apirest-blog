'use strict'

const express = require('express');
const PostCntrls = require('../controllers/post');
const api = express.Router();

api.get('/post', PostCntrls.getPosts);
api.get('/post/:postId', PostCntrls.getPost);
api.post('/post', PostCntrls.savePost);
api.put('/post/:postId', PostCntrls.updatePost);
api.delete('/post/:postId', PostCntrls.deletePost);

module.exports = api;
