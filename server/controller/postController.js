// 스키마 불러오기
const Post = require('../models/schema/post');
const Comment = require('../models/schema/comment');
const User = require('../models/schema/user');

// 토큰 검증 위한 컨트롤러 불러오기
const authController = require('./authController');

// 게시물 등록
exports.createPost = async (req, res) => {
  // 복호화한 토큰으로 유저 확인
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

  // 새 포스트 저장하기 그리고 유저 게시물에도 추가하기

  await newPost.save();
  await User.findOneAndUpdate(
    // 이름이 토큰인 사람 찾아서
    { userName: req.tokenInfo },
    // 게시물 등록 시 유저 게시물에 추가하고, 유저 게시물 개수 추가
    // { $push: { userPosts: newPost }, userPostsCount: length + 1 },
    { $push: { userPosts: newPost } },
  )
    .then(() => {
      res.status(200).json({ message: '게시글 등록 success', data: newPost });
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

// 게시물 수정
exports.updatePost = async (req, res) => {
  const { postId } = req.params;
  const post = await Post.findOne({ postId }).then(po => po);

  if (post) {
    // 복호화한 토큰으로 유저 확인
    let userCheck = await User.findOne({
      userName: req.tokenInfo,
    });

    const length = post.comments.length;

    const update = {
      postContent: req.body.postContent,
      location: req.body.location,
      weather: req.body.weather,
      commentCount: length,
    };

    const message = { message: '수정이 완료되었습니다!' };
    await Post.findOneAndUpdate(
      ({ postId }, { userName: userCheck.userName }),
      update,
    )
      .then(() => {
        res.status(200).send(message);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  } else {
    res.status(403).send({ message: '존재하지 않는 게시물입니다' });
  }
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
      res.status(200).send(posts);
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
      res.status(200).send(posts);
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
  const post = await Post.findOne({ postId }).then(po => po);

  if (post) {
    // 복호화한 토큰으로 유저 확인
    let userCheck = await User.findOne({
      userName: req.tokenInfo,
    });

    // 게시물 작성자 본인이면 삭제 가능
    await Post.findOneAndDelete({ postId }, { userName: userCheck.userName })
      .then(() => {
        Comment.deleteMany({ postId });
        res.status(200).send(message);
      })
      .catch(() =>
        res.status(500).send({ message: '본인이 아니면 삭제할 수 없습니다' }),
      );
  } else {
    res.status(403).send({ message: '존재하지 않는 게시물입니다' });
  }
};
