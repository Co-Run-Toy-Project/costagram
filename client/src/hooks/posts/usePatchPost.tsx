import { useMutation, useQueryClient } from '@tanstack/react-query';
import patchPost from '../../apis/posts/patchPost';

const usePatchPost = () => {
  const queryClient = useQueryClient();

  return useMutation(patchPost, {
    onSuccess: () => {
      queryClient.invalidateQueries(['get/post']);
    },
    onError: err => console.log(err),
  });
};

export default usePatchPost;
