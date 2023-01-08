const mongoose = require('mongoose');
// 게시물 스키마
// ref로 가져오는 걸로 변경하기
const postSchema = new mongoose.Schema(
  {
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      unique: true,
    },
    name: {
      type: String,
    },
    postContent: {
      type: Array,
      required: true,
      default: [],
    },
    location: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    like: {
      type: Boolean,
    },
    likeCount: {
      type: Number,
      required: true,
      default: 0,
    },
    commentCount: {
      type: Number,
      required: true,
      default: 0,
    },
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

// 게시물 모델 생성
const Post = mongoose.model('Post', postSchema);

module.exports = Post;
