const express = require('express');
const router = express.Router();

// 프로필 조회
router.get('/', (req, res) => {
  res.status(200).json({
    userId: 1,
    userName: 'oheun',
    userProfile:
      'https://images.unsplash.com/photo-1470093851219-69951fcbb533?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    introduce: 'api 문서 만드는 중',
    userPosts: [
      {
        postId: 1,
        imagePath:
          'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80',
        likeCount: 1,
        commentCount: 12,
      },
      {
        postId: 2,
        imagePath:
          'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80',
        likeCount: 3,
        commentCount: 2,
      },
      {
        postId: 3,
        imagePath:
          'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80',
        likeCount: 5,
        commentCount: 1,
      },
    ],
    userPostsCount: 3,
  });
});

// 프로필 수정
router.patch('/', (req, res) => {
  res.status(200).json({ message: '프로필 수정 success' });
});

module.exports = router;
