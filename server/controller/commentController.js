const Post = require('../models/schema/post');
const Comment = require('../models/schema/comment');

exports.addComment = async (req, res, next) => {
  const { postId } = req.params;
  const { commentContent } = req.body;
  const newComment = new Comment({
    commentContent,
  });

  const message = { message: '댓글 등록이 완료되었습니다!' };

  await newComment.save();
  Post.findOneAndUpdate({ postId }, { $push: { comments: newComment } })
    .then(() => res.status(200).json(message))
    .catch(err => {
      res.status(500).send(err);
    });
};

// 댓글 삭제
exports.deleteComment = async (req, res) => {
  const { postId, commentId } = req.params;
  const message = { message: `${commentId}번 댓글이 삭제되었습니다!` };
  await Comment.deleteOne({ commentId })
    .then(() => res.status(200).json(message))
    .catch(err => {
      res.status(500).send(err);
    });
};
