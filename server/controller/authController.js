// 미들웨어 가져오기
const Axios = require('axios');

// 유저 모델 가져오기
const User = require('../models/schema/user');

// 토큰 처리 함수 가져오기
const JwtMiddleware = require('../utils/JwtMiddleware');

exports.getUserInfo = async (req, res, next) => {
  // 인가 코드

  const { code } = req.query;

  // 토큰 발급
  const authToken = await Axios.post(
    'https://kauth.kakao.com/oauth/token',
    {},
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      params: {
        grant_type: 'authorization_code',
        client_id: process.env.KAKAO_RESTAPI,
        code,
        redirect_uri: process.env.KAKAO_REDIRECT_URI,
      },
    },
  );

  // Access token을 이용해 정보 가져오기
  const userInfo = await Axios.post(
    'https://kapi.kakao.com/v2/user/me',
    {},
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        // 위에서 인가코드로 받아온 access_token
        Authorization: 'Bearer ' + authToken.data.access_token,
      },
    },
  )
    .then(result => result.data)
    .catch(err => res.status(500).send(err.message));

  // 기존 유저인지 검색한다
  let userCheck = null;
  let token = null;
  let newUser = null;
  userCheck = await User.findOne({
    userName: userInfo.properties.nickname,
  });

  // 없으면 만들어서 토큰 주고 => 회원가입
  if (userCheck === null) {
    token = JwtMiddleware.createToken(userInfo.properties.nickname);
    const newUser = new User({
      userId: userInfo.id,
      userName: userInfo.properties.nickname,
      profileImage: userInfo.properties.thumbnail_image,
      userToken: token,
    });
    await newUser.save();
  }

  // 일단 쿠키로 보내기
  res.cookie('jwt', token);
  res.status(200).json({
    // 기존 유저면 기존 유저, 새로운 유저면 새로운 유저 정보
    user: userCheck || newUser,
    message: 'token이 발급되었습니다',
    // 있으면 있는 토큰 주고
    jwt: token || userCheck.userToken,
  });
};

// 토큰 권한 확인
exports.isAuthorization = async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) {
    return null;
  }

  let userCheck = await User.findOne({
    userName: JwtMiddleware.verifyToken(authorization),
  });

  return userCheck;
};

// 데모 계정 로그인
exports.demoLogin = async (req, res, next) => {
  // 데모 토큰 받아와서 로그인하기
  let userCheck = await User.findOne({
    userName: 'TEST유저',
  });

  res.status(200).json({
    user: userCheck,
    message: 'TEST 유저 정보 보내드립니다',
    jwt: userCheck.userToken,
  });
};
