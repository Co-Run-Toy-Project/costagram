import axios from 'axios';

const LIMIT = 2;

const getPosts = async ({ pageParam = 1 }) => {
  const { data } = await axios.get(`/post`, {
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      withCredentials: true,
      Authorization: `${localStorage.getItem('token')}`,
      'Content-Type': `application/json`,
    },
    params: {
      page: pageParam,
      perPage: LIMIT,
    },
  });
  return { data, nextPage: data.length === LIMIT ? pageParam + 1 : null };
};

export default getPosts;
