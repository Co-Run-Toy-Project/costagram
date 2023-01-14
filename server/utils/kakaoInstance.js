const axios = require('axios');

const KakaoInstance = axios.create({
  headers: {
    'content-type': 'application/x-www-form-urlencoded',
  },
});

module.exports = KakaoInstance;
