import mongoose from 'mongoose';
// 좋아요 스키마
// 아이디, 이름, 비밀번호, 토큰
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

// 게시물 모델 생성
const like = mongoose.model('like', likeSchema);

export default like;
