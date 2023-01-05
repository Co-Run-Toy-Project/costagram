const express = require('express');
const router = express.Router();

// 게시글 조회
router.get('/', (req, res) => {
  console.log(req.params.postId);
});

// 게시글 등록
router.post('/');

// 게시글 수정
router.patch('/:postId', (req, res) => {
  console.log(req.params.postId);
});

// 게시글 삭제
router.delete('/:postId', (req, res) => {
  console.log(req.params.postId);
});

// 댓글 삭제
router.delete('/post/:postId/comment/:commentId', (req, res) => {
  console.log(req.params.postId);
});

module.exports = router;
