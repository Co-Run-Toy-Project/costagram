import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  userId: { ref: 'User' },
  commetedId: { type: mongoose.Schema.Types.ObjectId },
  commentContent: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Comment = mongoose.model('Comment', commentSchema);
export default Comment;
