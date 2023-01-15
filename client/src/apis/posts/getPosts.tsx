import axios from 'axios';

const getPosts = async () => {
  return axios
    .get(`/post`, {
      baseURL: process.env.REACT_APP_BASE_URL,
      headers: {
        withCredentials: true,
        // Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': `application/json`,
      },
    })
    .catch(err => console.log(err));
};

export default getPosts;
