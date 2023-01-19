import axios from 'axios';

type Props = {
  postId: number;
};

const deletePost = async ({ postId }: Props) => {
  return axios
    .delete(`/post/${postId}`, {
      baseURL: process.env.REACT_APP_BASE_URL,
      headers: {
        withCredentials: true,
        Authorization: `${localStorage.getItem('token')}`,
        'Content-Type': `application/json`,
      },
    })
    .catch(err => console.log(err));
};

export default deletePost;
