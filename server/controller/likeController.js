// 스키마 불러오기
const Post = require('../models/schema/post');
const User = require('../models/schema/user');

const like = async (req, res) => {
  // 게시물 아이디
  const { postId } = req.params;
  const post = await Post.findOne({ postId }).then(po => po);

  if (post) {
    console.log(post);
    // 복호화한 토큰으로 유저 확인
    let userCheck = await User.findOne({
      userName: req.tokenInfo,
    });

    const likeCount = post.likes.length;

    if (post.likes.includes(userCheck.userName)) {
      await post.updateOne({
        $pull: { likes: userCheck.userName },
        likeCount: likeCount - 1,
      });
      res.status(200).json('좋아요 취소');
    } else {
      await post.updateOne({
        $push: { likes: userCheck.userName },
        likeCount: likeCount + 1,
      });
      res.status(200).json('좋아요');
    }
  } else {
    res.status(403).send({ message: '존재하지 않는 게시물입니다' });
  }
};

module.exports = like;
