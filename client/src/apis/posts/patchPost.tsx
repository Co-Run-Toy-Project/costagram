import axios from 'axios';

interface Props {
  curPostId: number | null;
  textContent: string;
}

const patchPost = async ({ curPostId, textContent }: Props) => {
  const content = {
    postContent: textContent,
  };

  return axios.patch(`post/${curPostId}`, content, {
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      withCredentials: true,
      Authorization: `${localStorage.getItem('token')}`,
      'Content-Type': `application/json`,
    },
  });
};

export default patchPost;
