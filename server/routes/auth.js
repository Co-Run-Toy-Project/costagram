const express = require('express');
const router = express.Router();

// 컨트롤러 불러오기
const authController = require('../controller/authController');
const JwtMiddleware = require('../utils/JwtMiddleware');

// 토큰 발급
router.get('/kakao/callback', authController.getUserInfo);

const check = async (req, res) => {
  res.send(req.tokenInfo);
};

// 토큰 검증 로직 확인용 라우터
router.get('/verify', JwtMiddleware.verifyToken, check);

module.exports = router;
