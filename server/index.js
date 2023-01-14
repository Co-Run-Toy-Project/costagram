// 설치
const cors = require('cors');
const dotenv = require('dotenv');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

dotenv.config();

// MongoDB 연결
const connectDB = require('./models/connectDB');
connectDB();

// 미들웨어
app.use(cors());
// Content-Type이 application/json인 바디를 파싱하도록 설정
app.use(bodyParser.json());

// 요청과 응답에 대한 정보를 콘솔에 찍음
// dev - 개발 / combined - 배포
app.use(morgan('dev'));

// 라우팅 설정
app.get('/', (req, res) => {
  res.send('Hello Corun!');
});

const postRouter = require('./routes/post');
app.use('/post', postRouter);
const userRouter = require('./routes/user');
app.use('/user', userRouter);

const port = 8080;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
