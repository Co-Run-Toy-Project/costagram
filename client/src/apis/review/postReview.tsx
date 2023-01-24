import axios from 'axios';

interface Props {
  postId: number;
  reviewValue: string;
}

const postReview = ({ postId, reviewValue }: Props) => {
  const body = {
    commentContent: reviewValue,
  };
  return axios.post(`/post/${postId}/comment`, body, {
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      Authorization: localStorage.getItem('token'),
      'content-Type': `application/json`,
    },
  });
};

export default postReview;
