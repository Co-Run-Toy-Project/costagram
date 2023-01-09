const Post = require('../models/schema/post');

exports.createPost = async (req, res) => {
  // const newPost = await new Post(req.body);
  const newPost = await new Post(req.body);
  await newPost
    .save()
    .then(() => {
      res.status(200).json({ message: '게시글 등록 success', data: newPost });
    })
    .catch(err => {
      console.log('게시물 등록이 실패했습니다');
      res.status(500).send(err);
    });
};

exports.updatePost = async (req, res) => {
  const filter = { postId: req.params.postId };
  const update = { postContent: req.body.postContent };
  const message = { message: '수정이 완료되었습니다!' };
  await Post.findOneAndUpdate(filter, update)
    .then(() => {
      res.status(200).json(message);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

exports.getAllPost = async (req, res, next) => {
  // find가 없으면 모든 데이터 조회
  Post.find({})
    // 👇 각 product 데이터에 저장된 postId에 맞게 해당  정보 연동
    .populate('postId')
    .then(posts => {
      // 모든 데이터 찾아 클라이언트로 전송
      res.status(200).json(posts);
    })
    .catch(err => {
      // 실패 시 에러 전달
      res.status(500).send(err);
    });
};

exports.deletePost = async (req, res) => {
  const filter = { postId: req.params.postId };
  const message = { message: '게시물이 삭제되었습니다!' };
  await Post.findOneAndDelete(filter)
    .then(() => {
      res.status(200).json(message);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};
