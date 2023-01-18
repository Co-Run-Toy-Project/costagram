import axios from 'axios';

interface Props {
  postId: number;
  textContent: string;
}

const patchPost = async ({ postId, textContent }: Props) => {
  const content = {
    postContent: textContent,
  };

  return axios.patch(`post/${postId}`, content, {
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      withCredentials: true,
      // Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': `application/json`,
    },
  });
};

export default patchPost;
