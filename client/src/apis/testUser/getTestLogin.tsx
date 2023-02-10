import axios from 'axios';

const getTestLogin = async () => {
  return axios
    .get(`/demo/login`, {
      baseURL: process.env.REACT_APP_BASE_URL,
      headers: {
        withCredentials: true,
        'Content-Type': `application/json`,
      },
    })
    .catch(err => console.log(err));
};

export default getTestLogin;
