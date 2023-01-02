// 설치
const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// 라우트
const Routes = require('./routes');

dotenv.config();

// db 연동
const connect = async () => {
  try {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGO_URI);
    console.log('Mongodb와 연결되었습니다!');
  } catch (err) {
    console.log(err);
  }
};

connect();
// 미들웨어
// Content-Type이 application/json인 바디를 파싱하도록 설정
app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('오셨습니까 형님!');
});

const port = 8080;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
