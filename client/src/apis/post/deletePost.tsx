import axios from 'axios';

const deletePost = async () => {
  return await axios
    .get(`/post/:postId`, {
      baseURL: process.env.REACT_PUBLIC_API_URL,
      headers: {
        withCredentials: true,
        Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': `application/json`,
      },
    })
    .catch(err => console.log(err));
};

export default deletePost;
