const Post = require('../models/schema/post');
const Comment = require('../models/schema/comment');

exports.getComment = async (req, res, next) => {
  const { postId } = req.params;

  // postId에 해당하는 데이터 1개 찾기
  Comment.find({ postId })
    // 👇 comments와 연결된 댓글들 내용까지 같이 불러오기!
    // 댓글 생성될 때 Comments의 post에 Post ObjectId를 같이 저장시켜줘야 가능함.
    .then(comments => {
      // 클라이언트로 전송
      res.status(200).json(comments);
    })
    .catch(err => {
      // 실패 시 에러 전달
      res.status(500).send(err);
    });
};

exports.addComment = async (req, res, next) => {
  const { postId } = req.params;
  const { commentContent } = req.body;

  const message = { message: '댓글 등록이 완료되었습니다!' };
  const post = Post.findOne({ postId });
  // 게시물이 있는지 확인
  if (post) {
    const newComment = new Comment({ postId, commentContent });
    await newComment.save();

    await Post.findOneAndUpdate({ postId }, { $push: { comments: newComment } })
      .then(() => {
        res.status(200).json(message);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  } else {
    res.status(500).send({ message: '게시물이 존재하지 않습니다!' });
  }
};

// 댓글 삭제
exports.deleteComment = async (req, res) => {
  const { commentId } = req.params;
  const message = { message: `${commentId}번 댓글이 삭제되었습니다!` };
  await Comment.deleteOne({ commentId })
    .then(() => res.status(200).json(message))
    .catch(err => {
      res.status(500).send(err);
    });
};
