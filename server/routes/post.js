// 미들웨어 불러오기
const express = require('express');
const router = express.Router();
const JwtMiddleware = require('../utils/JwtMiddleware');

// 컨트롤러 불러오기
const postController = require('../controller/postController');
const commentController = require('../controller/commentController');
const likeController = require('../controller/likeController');

// 게시글 전체 조회
router.get('/', postController.getAllPost);

// 게시글 1개 조회
router.get('/:postId', postController.getOnePost);

// 게시글 검색
router.post('/search', postController.searchPost);

// 게시글 등록
router.post('/', JwtMiddleware.verifyToken, postController.createPost);

// 게시글 수정
router.patch('/:postId', JwtMiddleware.verifyToken, postController.updatePost);

// 게시글 삭제
router.delete('/:postId', JwtMiddleware.verifyToken, postController.deletePost);

// 댓글 조회
router.get('/:postId/comment', commentController.getComment);

// 댓글 조회
router.get('/:postId/comment', commentController.getComment);

// 댓글 등록
router.post(
  '/:postId/comment',
  JwtMiddleware.verifyToken,
  commentController.addComment,
);

// 댓글 삭제
router.delete(
  '/:postId/comment/:commentId',
  JwtMiddleware.verifyToken,
  commentController.deleteComment,
);

// 좋아요
router.put('/:postId/like', JwtMiddleware.verifyToken, likeController);

module.exports = router;
