const express = require('express');
const router = express.Router();

// 컨트롤러 불러오기
const postController = require('../controller/postController');

// 게시글 조회
router.get('/', postController.getAllPost);

// 게시글 등록
router.post('/', postController.createPost);

// 게시글 수정
router.patch('/:postId', postController.updatePost);

// 게시글 삭제
router.delete('/:postId', postController.deletePost);

// 댓글 삭제
router.delete('/:postId/comment/:commentId', (req, res) => {
  res.status(200).json({ message: '댓글 삭제 success' });
});

module.exports = router;
