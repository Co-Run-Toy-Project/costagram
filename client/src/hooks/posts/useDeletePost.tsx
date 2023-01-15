import { useMutation, useQueryClient } from '@tanstack/react-query';
import deletePost from '../../apis/posts/deletePost';

const useDeletePost = () => {
  const queryClient = useQueryClient();

  return useMutation(deletePost, {
    onSuccess: () => {
      queryClient.invalidateQueries(['get/post']);
    },
  });
};

export default useDeletePost;
