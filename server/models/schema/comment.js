const mongoose = require('mongoose');
// 인덱스 자동 증가 함수
const autoIndex = require('../../utils/autoIndex');

const commentSchema = new mongoose.Schema({
  // 댓글 게시자
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  // 게시물 연결
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  },

  // 댓글 아이디
  commentId: {
    type: Number,
    unique: true,
    default: 0,
  },
  // 댓글 내용
  commentContent: { type: String },
  // 댓글 생성 시간
  createdAt: { type: Date, default: Date.now },

  // 댓글 개수
  commentCount: {
    type: Number,
    required: true,
    default: 0,
  },
});

// comment Id 자동 증가
autoIndex(commentSchema, mongoose, 'commentId', 'commentId');

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
