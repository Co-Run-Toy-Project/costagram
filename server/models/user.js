import mongoose from 'mongoose';
import { UserInfo } from 'interface/user.info';

// 유저 스키마
// 아이디, 이름, 비밀번호, 토큰
const userSchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

// 유저 모델 생성
const User = mongoose.model('User', userSchema);

export default User;
