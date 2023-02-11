import { useMutation } from '@tanstack/react-query';
import postSortPosts from '../../apis/posts/postSortPosts';

const usePostSortPosts = () => {
  return useMutation(postSortPosts);
};

export default usePostSortPosts;
