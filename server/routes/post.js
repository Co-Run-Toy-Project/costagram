const express = require('express');
const router = express.Router();

// 컨트롤러 불러오기
const postController = require('../controller/postController');
const commentController = require('../controller/commentController');

// 게시글 조회
router.get('/', postController.getAllPost);

// 게시글 등록
router.post('/', postController.createPost);

// 게시글 수정
router.patch('/:postId', postController.updatePost);

// 게시글 삭제
router.delete('/:postId', postController.deletePost);

// 댓글 등록
router.post('/:postId/comment', commentController.addComment);

// 댓글 삭제
router.delete('/:postId/comment/:commentId', commentController.deleteComment);

module.exports = router;
