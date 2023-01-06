const mongoose = require('mongoose');

// db 연동
const connectDB = async () => {
  try {
    mongoose.set('strictQuery', false);
    mongoose.connect(process.env.MONGO_URI);
    console.log('Mongodb와 연결되었습니다!');
  } catch (err) {
    console.log(err);
  }
};

mongoose.connection.on('error', err => {
  console.error('몽고디비 연결 에러입니다.', err);
});

module.exports = connectDB;
