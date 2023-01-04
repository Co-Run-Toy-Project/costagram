const express = require('express');
const router = express.Router();

// 게시글 조회
router.get('/', (req, res) => {
  res.status(200).json([
    {
      postId: 1,
      userId: 1,
      userName: 'yw1010',
      postContent: '내용',
      location: {
        lat: 37.555946,
        lng: 126.972317,
      },
      imagePath: [
        'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80',
        'https://images.unsplash.com/photo-1545229765-7ff613f80127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1564419320603-628d868a193f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80',
      ],
      createdAt: '2022-02-26T16:37:48.244Z',
      like: false,
      likeCount: 3,
      commentCount: 2,
      comment: [
        {
          commentId: 1,
          commentContent: '첫번째입니다',
          createdAt: '2022-12-26T16:37:48.244Z',
        },
        {
          commentId: 2,
          commentContent: '두번째입니다',
          createdAt: '2022-12-26T16:37:48.244Z',
        },
      ],
    },
    {
      postId: 2,
      userId: 2,
      userName: 'adfafsd0',
      postContent: '내용',
      location: {
        lat: 37.555946,
        lng: 126.972317,
      },
      imagePath: [
        'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80',
        'https://images.unsplash.com/photo-1545229765-7ff613f80127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        'https://images.unsplash.com/photo-1564419320603-628d868a193f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80',
      ],
      createdAt: '2022-02-26T16:37:48.244Z',
      like: false,
      likeCount: 3,
      commentCount: 2,
      comment: [
        {
          commentId: 1,
          commentContent: '첫번째입니다',
          createdAt: '2022-12-26T16:37:48.244Z',
        },
        {
          commentId: 2,
          commentContent: '두번째입니다',
          createdAt: '2022-12-26T16:37:48.244Z',
        },
      ],
    },
  ]);
});

// 게시글 등록
router.post('/', (req, res) => {
  res.status(200).json({ message: '게시글 등록 success' });
});

// 게시글 수정
router.patch('/:postId', (req, res) => {
  res.status(200).json({ message: '게시글 수정 success' });
});

// 게시글 삭제
router.delete('/:postId', (req, res) => {
  res.status(200).json({ message: '게시글 삭제 success' });
});

// 댓글 삭제
router.delete('/:postId/comment/:commentId', (req, res) => {
  res.status(200).json({ message: '댓글 삭제 success' });
});

module.exports = router;
