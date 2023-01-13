const express = require('express');
const router = express.Router();

// 컨트롤러 불러오기
const authController = require('../controller/authController');

// 토큰 발급
router.get('/kakao/callback', authController.getToken);

module.exports = router;
