import { useQuery } from '@tanstack/react-query';
import getPosts from '../../apis/post/getPosts';

const useGetPosts = () => {
  return useQuery(['get/post'], () => getPosts(), {
    enabled: false,
  });
};

export default useGetPosts;
