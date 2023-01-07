const mongoose = require('mongoose');

// 유저 스키마
// 유저 아이디, 이름, 프로필 사진, 소개글, 유저 게시물, 유저 게시물 개수
const userSchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
      required: true,
      unique: true,
    },
    userName: {
      type: String,
      required: true,
    },
    profileImage: {
      type: String,
      required: true,
    },
    introduce: {
      type: String,
      required: true,
      default: '',
    },
    userPosts: {
      type: Array,
      required: true,
    },
    userPostsCount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// 유저 모델 생성
const User = mongoose.model('User', userSchema);

module.exports = User;
