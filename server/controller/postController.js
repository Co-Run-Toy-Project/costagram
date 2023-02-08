// 스키마 불러오기
const Post = require('../models/schema/post');
const Comment = require('../models/schema/comment');
const User = require('../models/schema/user');

// 토큰 검증 위한 컨트롤러 불러오기
const authController = require('./authController');

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
  // 페이지네이션 변수
  // 안 보낼 경우 현재 페이지 1, 기본 불러오기 10으로 처리
  const page = req.query.page || 1; // 현재 페이지
  const perPage = req.query.perPage || 10; // 페이지 당 글 게시글 수
  const total = await Post.countDocuments({}); // 총 게시글 수
  // 최대 페이지 개수
  const totalPage = Math.ceil(total / perPage); // 올림

  // find가 없으면 모든 데이터 조회
  Post.find({})
    .sort({ createdAt: -1 }) // 최신 순 정렬
    .skip(perPage * (page - 1))
    .limit(perPage) // 검색 결과 수 제한
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

exports.searchPost = async (req, res, next) => {
  let { userName } = req.body;

  User.findOne({ userName })
    .then(user => {
      // 유저 없으면 없다고 보내기
      if (!user) return res.status(404).send('User not found');

      // 해당하는 유저 게시물 보내기
      Post.find({ userName })
        .sort({ createdAt: -1 }) // 최신 순 정렬
        .populate('comments')
        .then(posts => {
          res.status(200).send(posts);
        })
        .catch(err => {
          res.status(500).send(err);
        });
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

// 게시물 등록
exports.createPost = async (req, res) => {
  // 복호화한 토큰으로 유저 확인
  let userCheck = await User.findOne({
    userName: req.tokenInfo,
  });

  const length = userCheck.userPostsCount;

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
  await userCheck
    .updateOne(
      // 게시물 등록 시 유저 게시물에 추가하고, 유저 게시물 개수 추가
      { $push: { userPosts: newPost }, userPostsCount: length + 1 },
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

    const editPost = await Post.findOneAndUpdate(
      // 입력한 게시물이 존재하면서, 주인이 토큰 본인일 때
      { postId, userName: userCheck.userName },
      update,
    ).then(edit => edit);

    if (editPost) {
      res.status(200).send({ message: '수정이 완료되었습니다!' });
    } else {
      // 게시물은 존재하지만 다른 사람 토큰일 경우
      res.status(401).send({ message: '본인만 수정할 수 있습니다.' });
    }
  } else {
    res.status(403).send({ message: '존재하지 않는 게시물입니다' });
  }
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

    const length = userCheck.userPostsCount;

    // 게시물 작성자 본인이면 삭제 가능
    // 삭제되면 ObjectId가 사라져서 참조관계에서도 알아서 사라지는 듯.
    await Post.findOneAndDelete({ postId, userName: userCheck.userName })
      .then(() => {
        // 게시물에 딸려있는 댓글 삭제
        Comment.deleteMany({ postId });
        // 유저 게시물에서 삭제 후, 개수 감소
        // 얘를 find로 찾은 다음에 _id를 삭제해야겠네
        // userPosts에 있는 거 삭제 해야 하긴 함.
        User.findOneAndUpdate(
          { userName: userCheck.userName },
          { $pull: { userPosts: post._id }, userPostsCount: length - 1 },
        );
        res.status(200).send(message);
      })
      .catch(() =>
        res.status(500).send({ message: '본인이 아니면 삭제할 수 없습니다' }),
      );
  } else {
    res.status(403).send({ message: '존재하지 않는 게시물입니다' });
  }
};
