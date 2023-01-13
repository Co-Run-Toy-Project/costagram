const KakaoInstance = require('../utils/kakaoInstance');

exports.getUserInfo = async (req, res, next) => {
  // 인가 코드
  const { code } = req.query;
  // 토큰 발급
  const authToken = await KakaoInstance.post(
    'https://kauth.kakao.com/oauth/token',
    {
      params: {
        grant_type: 'authorization_code',
        client_id: process.env.KAKAO_RESTAPI,
        code,
        redirect_uri: process.env.KAKAO_REDIRECT_URI,
      },
    },
  );

  // Access token을 이용해 정보 가져오기
  const authInfo = await Axios.post(
    'https://kapi.kakao.com/v2/user/me',
    {},
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Bearer ' + authToken.data.access_token,
      },
    },
  );
  //동의항목을 설정한 사용자의 정보 보냄
  res.status(200).json(authInfo.data);
};
