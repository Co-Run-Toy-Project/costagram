import axios from 'axios';

const patchPost = async () => {
  const data = {
    postContent: '수정할 내용',
  };

  return await axios.patch(`post/:postId`, {
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      withCredentials: true,
      // Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': `application/json`,
    },
  });
};

export default patchPost;
