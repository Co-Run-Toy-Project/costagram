const express = require('express'); // express 미들웨어
const cors = require('cors'); // cors 미들웨어
const mongoose = require('mongoose'); // mongoose
require('dotenv').config(); // 환경변수를 위한 dotenv

const app = express();
const { PORT, MONGO_URI } = process.env; // 포트 번호랑 db uri

app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', false); // 에러 해결 코드

// MongoDB 서버랑 연결
const uri = MONGO_URI; // mongoDB Connect 정보
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch((e: any) => console.error(e));

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB database connection succes');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
