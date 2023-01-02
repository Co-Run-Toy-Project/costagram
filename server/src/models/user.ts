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

export default mongoose.model;
