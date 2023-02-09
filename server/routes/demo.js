const express = require('express');
const router = express.Router();

// 컨트롤러 불러오기
const authController = require('../controller/authController');

// 데모 계정 로그인
router.get('/login', authController.demoLogin);

module.exports = router;