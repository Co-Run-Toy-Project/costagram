import mongoose from 'mongoose';
// 좋아요 스키마
// 유저 아이디, 좋아요 여부, 좋아요 개수
const likeSchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
      ref: 'user', // 유저에서 가져옴
      required: true,
    },
    like: {
      type: Boolean,
      required: true,
    },
    likeCount: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// 좋아요 모델 생성
const like = mongoose.model('like', likeSchema);

export default like;
