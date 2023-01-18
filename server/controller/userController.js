// 유저 모델 가져오기
const User = require('../models/schema/user');

exports.getUser = async (req, res, next) => {
  let userCheck = await User.findOne({
    userName: req.tokenInfo,
  });

  // 토큰에 해당하는 유저 정보 찾기
  User.findOne({ userName: userCheck.userName })
    .then(posts => {
      // 클라이언트로 전송
      res.status(200).json(posts);
    })
    .catch(err => {
      // 실패 시 에러 전달
      res.status(500).send(err);
    });
};

exports.updateUser = async (req, res) => {
  let userCheck = await User.findOne({
    userName: req.tokenInfo,
  });

  // 토큰에 해당하는 유저 정보 찾아 수정하기
  const update = { introduce: req.body.introduce };
  const message = { message: '소개글 수정이 완료되었습니다!' };
  await User.findOneAndUpdate({ userName: userCheck.userName }, update)
    .then(() => {
      res.status(200).json(message);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};
