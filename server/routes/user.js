const express = require('express');
const router = express.Router();

// 컨트롤러 불러오기
const authController = require('../controller/authController');
const userController = require('../controller/userController');

// 프로필 조회
router.get('/', userController.getUser);

// 프로필 수정
router.patch('/', (req, res) => {
  res.status(200).json({ message: '프로필 수정 success' });
});

module.exports = router;
