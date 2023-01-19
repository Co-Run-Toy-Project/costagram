import { useMutation, useQueryClient } from '@tanstack/react-query';
import postReview from '../../apis/review/postReview';

const usePostReview = () => {
  const queryClient = useQueryClient();

  return useMutation(postReview, {
    onSuccess: res => {
      queryClient.invalidateQueries(['get/post']);
    },
    onError: error => {
      console.log(error);
    },
  });
};

export default usePostReview;
