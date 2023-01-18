const jwt = require('jsonwebtoken');
require('dotenv').config();

// 토큰 생성 jwt.sign(payload, secretKey, options, callback)
// 토큰 검증 jwt.verify(token, secretKey, options, callback)
const secretKey = process.env.SECRET_KEY;
const expiresIn = process.env.JWT_EXP;

const option = { expiresIn };

// 토큰을 쿠키로 보내야 하나 헤더로 보내야 하나
exports.createToken = payload => {
  // payload는 토큰이 가질 데이터
  return jwt.sign(payload, secretKey);
};

exports.verifyToken = async (req, res, next) => {
  const accessToken = req.headers.authorization;

  // 토큰이 안 들어왔을 때
  if (accessToken == null) {
    res
      .status(403)
      .json({ success: false, errormessage: '토큰이 들어오지 않았습니다' });
  } else {
    try {
      const tokenInfo = await new Promise((resolve, reject) => {
        jwt.verify(accessToken, secretKey, (err, decoded) => {
          if (err) {
            reject(err);
          } else {
            resolve(decoded);
          }
        });
      });
      req.tokenInfo = tokenInfo;
      next();
    } catch (err) {
      // 이상한 토큰 보냈을 때
      res
        .status(403)
        .json({ success: false, errormessage: '유효한 토큰이 아닙니다' });
    }
  }
};
