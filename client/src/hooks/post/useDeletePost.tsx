import { useMutation } from '@tanstack/react-query';
import deletePost from '../../apis/post/deletePost';

const useDeletePost = () => {
  return useMutation(deletePost);
};

export default useDeletePost;
