import axios from 'axios';

interface Props {
  postId: number;
}

const putLikes = async ({ postId }: Props) => {
  return axios
    .put(`post/${postId}/like`, {
      baseURL: process.env.REACT_APP_BASE_URL,
      headers: {
        withCredentials: true,
        Authorization: `${localStorage.getItem('token')}`,
        'Content-Type': `application/json`,
      },
    })
    .catch(err => console.log(err));
};

export default putLikes;
