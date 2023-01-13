const express = require('express');
const router = express.Router();

router.post('/:postId/comment', (req, res) => {
  res.status(200).json({ message: '댓글 등록 success' });
});

module.exports = router;
