const Post = require('../models/schema/post');
const Comment = require('../models/schema/comment');

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
