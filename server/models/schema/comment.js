const mongoose = require('mongoose');
// 인덱스 자동 증가 함수
const autoIndex = require('../../utils/autoIndex');

const commentSchema = new mongoose.Schema({
  // 사용자 이름
  userName: {
    type: String,
    ref: 'User',
  },
  // 프로필 사진
  profileImage: {
    type: String,
  },
  // 게시물 연결
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post',
  },
  // 연결된 게시물 아이디 => 삭제 시 사용
  postId: {
    type: Number,
    default: 0,
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
});

// comment Id 자동 증가
autoIndex(commentSchema, mongoose, 'commentId', 'commentId');

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
