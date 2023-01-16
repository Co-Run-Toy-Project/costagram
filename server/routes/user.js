const express = require('express');
const router = express.Router();

// 컨트롤러 불러오기
const userController = require('../controller/userController');

// 프로필 조회
router.get('/', userController.getUser);

// 프로필 수정
router.patch('/', userController.updateUser);

module.exports = router;
