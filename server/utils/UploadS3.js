const AWS = require('aws-sdk');

// AWS 설정하기
AWS.config.update({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
});

const s3 = new AWS.S3();

const uploadToS3 = file => {
  // S3 업로드 파라미터 설정
  const params = {
    Bucket: 'costaimgage', // 버킷 이름
    Key: file.originalname, // 파일 이름 - 꼭 필요함.
    Body: file.buffer, // 파일 데이터 - 꼭 필요함.
    ContentType: file.mimetype, // 파일 타입
  };

  // s3에 업로드
  return s3.upload(params).promise();
};

const UploadS3 = async (req, res, next) => {
  // multer 처리한 후에 이미지 데이터 받아오기
  const imageFiles = req.files.imagePath;
  // 이미지 데이터 돌면서 하나씩 S3 버킷에 올리기
  const uploadPromises = imageFiles.map(uploadToS3);
  // 비동기 작업 끝날 때까지 기다리다가, 업로드 결과 배열 반환
  const uploadedImages = await Promise.all(uploadPromises);
  // 이미지의 .Location 이미지 주소를 하나의 경로로 반환함.
  const imagePaths = uploadedImages.map(image => image.Location);

  req.imagePaths = imagePaths;
  next();
};

module.exports = UploadS3;
