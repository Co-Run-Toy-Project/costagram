const KakaoInstance = require('../utils/kakaoInstance');

exports.getToken = async (req, res) => {
  // 인가 코드
  const { code } = req.query;
  await KakaoInstance.post(
    `https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=${process.env.KAKAO_RESTAPI}&redirect_uri=${process.env.KAKAO_REDIRECT_URI}&code=${code}`,
  )
    .then(token => res.status(200).json(token.data))
    .catch(err => res.status(500).send(err));
};
