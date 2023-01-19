import axios from 'axios';

interface Props {
  postId: number;
  commentId: number;
}

const deleteReview = ({ postId, commentId }: Props) => {
  return axios.delete(`/post/${postId}/comment/${commentId}`, {
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      Authorization: localStorage.getItem('token'),
      'content-Type': `application/json`,
    },
  });
};

export default deleteReview;
