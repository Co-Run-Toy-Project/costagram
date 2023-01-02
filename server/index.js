const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Content-Type이 application/json인 바디를 파싱하도록 설정
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('오셨습니까 형님!');
});

const port = 8080;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
