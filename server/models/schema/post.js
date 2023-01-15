const mongoose = require('mongoose');
// 인덱스 자동 증가 함수
const autoIndex = require('../../utils/autoIndex');

// 게시물 스키마
const postSchema = new mongoose.Schema(
  {
    // 게시물 아이디
    postId: {
      type: Number,
      unique: true,
      default: 0,
    },
    // 사용자 아이디
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    // 사용자 이름
    // OAuth 이전에 기본값 추가
    userName: {
      type: String,
      default: 'User1',
      ref: 'User',
    },
    // 게시물 글 내용
    postContent: {
      type: String,
      required: true,
      default: '',
    },
    // 위도, 경도
    location: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
      default: {},
    },
    // 날씨
    weather: {
      type: String,
      required: true,
      default: '',
    },
    // 이미지 경로
    imagePath: {
      type: Array,
      default: [],
    },
    // 좋아요 여부
    like: {
      type: Boolean,
      default: false,
    },
    // 좋아요 개수
    likeCount: {
      type: Number,
      required: true,
      default: 0,
    },
    // 댓글
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }],
    // 댓글 개수
    commentCount: {
      type: Number,
      required: true,
      default: 0,
    },
    // 생성 시간
    createdAt: {
      type: Date,
      required: true,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

// postId 증가
autoIndex(postSchema, mongoose, 'postId', 'postId');

// 게시물 모델 생성
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
