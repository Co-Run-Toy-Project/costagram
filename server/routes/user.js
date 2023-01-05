const express = require('express');
const router = express.Router();

// 프로필 조회
router.get('/', (req, res) => {
  console.log(req.params.postId);
});

// 프로필 수정
router.patch('/', (req, res) => {
  console.log(req.params.postId);
});

module.exports = router;
