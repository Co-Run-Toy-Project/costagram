const Post = require('../models/schema/post');
const Comment = require('../models/schema/comment');

exports.addComment = async (req, res, next) => {
  const { postId } = req.params;
  const { commentContent } = req.body;
  const newComment = new Comment({
    commentContent,
  });

  // postId가 같은 것 찾아서
  const message = { message: '댓글 등록이 완료되었습니다!' };

  await newComment.save();
  Post.findOneAndUpdate({ postId }, { $push: { comments: newComment } })
    .then(() => res.status(200).json(message))
    .catch(err => {
      res.status(500).send(err);
    });
};

exports.deleteComment = async (req, res) => {
  const { postId, commentId } = req.params;
  const message = { message: '삭제가 완료되었습니다!' };
  await Post.findOneAndUpdate(
    { commentId },
    { $pull: { commentId: commentId } },
  )
    .then(() => res.status(200).json(message))
    .catch(err => {
      res.status(500).send(err);
    });
};
