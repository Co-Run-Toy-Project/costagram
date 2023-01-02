const express = require('express');
const router = express.Router();

router.post('/:postId', (req, res) => {
  console.log(req.params.postId);
});


module.exports = router;
