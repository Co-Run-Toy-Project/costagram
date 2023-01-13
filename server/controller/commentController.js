const Post = require('../models/schema/post');
const Comment = require('../models/schema/comment');

exports.addComment = async (req, res, next) => {
  // postId가 있는지 먼저 확인하기
  const { commentContent } = req.body;
  const newComment = new Comment({
    commentContent,
  });

  // postId가 같은 것 찾아서
  const message = { message: '댓글 등록이 완료되었습니다!' };

  await newComment.save().then(() => res.status(200).json(message));
  Post.findOneAndUpdate(
    { postId: req.params.postId },
    { $push: { comments: newComment } },
  ).catch(err => {
    res.status(500).send(err);
  });
};

exports.deleteComment = async (req, res) => {
  // const filter = { postId: req.params.commentId };
  // const update = { postContent: req.body.postContent };
  // const message = { message: '수정이 완료되었습니다!' };
  // await Post.findOneAndUpdate(filter, update)
  //   .then(() => {
  //     res.status(200).json(message);
  //   })
  //   .catch(err => {
  //     res.status(500).send(err);
  //   });
};
