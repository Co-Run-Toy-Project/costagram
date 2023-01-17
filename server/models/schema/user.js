const mongoose = require('mongoose');

// 유저 스키마
// 유저 아이디, 이름, 프로필 사진, 소개글, 유저 게시물, 유저 게시물 개수
const userSchema = new mongoose.Schema(
  {
    // 카카오 고유의 아이디
    userId: {
      type: Number,
      required: true,
    },
    // 카카오 닉네임
    userName: {
      type: String,
      required: true,
    },
    // 사진은 지금 안 오는 듯
    // 잠시 required 해제
    profileImage: {
      type: String,
      default: '',
    },
    // 소개글
    introduce: {
      type: String,
      required: true,
      default: '소개입니다',
    },
    // 사용자가 올린 게시물
    userPosts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    userPostsCount: {
      type: Number,
      required: true,
      default: 0,
    },
    userToken: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

// 유저 모델 생성
const User = mongoose.model('User', userSchema);

module.exports = User;
