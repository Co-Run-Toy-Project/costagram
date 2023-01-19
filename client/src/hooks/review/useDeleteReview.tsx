import { useMutation } from '@tanstack/react-query';
import deleteReview from '../../apis/review/deleteReview';

const useDeleteReview = () => {
  return useMutation(deleteReview, {
    onSuccess: res => {
      console.log(res);
    },
    onError: error => {
      console.log(error);
    },
  });
};

export default useDeleteReview;
