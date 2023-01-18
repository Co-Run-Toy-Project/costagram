// 스키마 불러오기
const Post = require('../models/schema/post');
const Comment = require('../models/schema/comment');
const User = require('../models/schema/user');

// 토큰 검증 위한 컨트롤러 불러오기
const authController = require('./authController');

// 게시물 등록
exports.createPost = async (req, res) => {
  let userCheck = await User.findOne({
    userName: req.tokenInfo,
  });

  const newPost = await new Post({
    postContent: req.body.postContent,
    location: req.body.location,
    weather: req.body.weather,
    imagePath: req.body.imagePath,
    userName: userCheck.userName,
    profileImage: userCheck.profileImage,
  });

  await newPost
    .save()
    .then(() => {
      res.status(200).json({ message: '게시글 등록 success', data: newPost });
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

// 게시물 수정
exports.updatePost = async (req, res) => {
  // 토큰에 맞는 계정
  let userCheck = authController.isAuthorization(req);
  const { postId } = req.params;
  const update = {
    postContent: req.body.postContent,
    location: req.body.location,
  };
  const message = { message: '수정이 완료되었습니다!' };
  await Post.findOneAndUpdate({ postId }, update)
    .then(() => {
      res.status(200).json(message);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

// 게시물 개별 조회
exports.getOnePost = async (req, res, next) => {
  const { postId } = req.params;

  // postId에 해당하는 데이터 1개 찾기
  Post.findOne({ postId })
    // 👇 comments와 연결된 댓글들 내용까지 같이 불러오기!
    // 댓글 생성될 때 Comments의 post에 Post ObjectId를 같이 저장시켜줘야 가능함.
    .populate('comments')
    .then(posts => {
      // 클라이언트로 전송
      res.status(200).json(posts);
    })
    .catch(err => {
      // 실패 시 에러 전달
      res.status(500).send(err);
    });
};

// 게시물 전체 조회
exports.getAllPost = async (req, res, next) => {
  // find가 없으면 모든 데이터 조회
  Post.find({})
    // 👇 comments와 연결된 댓글들 내용까지 같이 불러오기!
    // 댓글 생성될 때 Comments의 post에 Post ObjectId를 같이 저장시켜줘야 가능함.
    .populate('comments')
    .then(posts => {
      // 모든 데이터 찾아 클라이언트로 전송
      res.status(200).json(posts);
    })
    .catch(err => {
      // 실패 시 에러 전달
      res.status(500).send(err);
    });
};

// 게시물 삭제
exports.deletePost = async (req, res) => {
  const { postId } = req.params;
  const message = { message: '게시물이 삭제되었습니다!' };
  await Post.findOneAndDelete(postId);
  await Comment.deleteMany({ postId });
  res.status(200).json(message);
};
