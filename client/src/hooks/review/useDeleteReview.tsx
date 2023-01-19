import { useMutation, useQueryClient } from '@tanstack/react-query';
import deleteReview from '../../apis/review/deleteReview';

const useDeleteReview = () => {
  const queryClient = useQueryClient();

  return useMutation(deleteReview, {
    onSuccess: res => {
      queryClient.invalidateQueries(['get/post']);
    },
    onError: error => {
      console.log(error);
    },
  });
};

export default useDeleteReview;
