import { useMutation } from '@tanstack/react-query';
import postReview from '../../apis/review/postReview';

const usePostReview = () => {
  return useMutation(postReview, {
    onSuccess: res => {
      console.log(res);
    },
    onError: error => {
      console.log(error);
    },
  });
};

export default usePostReview;
