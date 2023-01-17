// 유저 모델 가져오기
const User = require('../models/schema/user');

exports.getUser = async (req, res, next) => {
  // 토큰에 해당하는 유저 정보 찾기
  // 아직 프론트에서 토큰이 통용되지 않은 것 같아 김오은 정보 찾아 보내드리겠습니다
  User.findOne({ _id: '63c649c29279581609e2d175' })
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
  // 토큰에 해당하는 유저 정보 찾아 수정하기
  // 아직 프론트에서 토큰이 통용되지 않은 것 같아 김오은 정보 찾아 보내드리겠습니다
  const update = { introduce: req.body.introduce };
  const message = { message: '소개글 수정이 완료되었습니다!' };
  await User.findOneAndUpdate({ _id: '63c649c29279581609e2d175' }, update)
    .then(() => {
      res.status(200).json(message);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};
