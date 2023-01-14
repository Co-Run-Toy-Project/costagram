import { useMutation, useQueryClient } from '@tanstack/react-query';
import deletePost from '../../apis/post/deletePost';

const useDeletePost = () => {
  // const queryClient = useQueryClient();

  return useMutation(deletePost);
};

export default useDeletePost;

// {
//   onSuccess: () => {
//     queryClient.invalidateQueries(['get/post']);
//   },
// }
