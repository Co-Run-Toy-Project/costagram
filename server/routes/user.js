const express = require('express');
const router = express.Router();

// 컨트롤러 불러오기
const userController = require('../controller/userController');
const JwtMiddleware = require('../utils/JwtMiddleware');

// 프로필 조회
router.get('/', JwtMiddleware.verifyToken, userController.getUser);

// 프로필 수정
router.patch('/', JwtMiddleware.verifyToken, userController.updateUser);

module.exports = router;
