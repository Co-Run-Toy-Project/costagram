import { useQuery } from '@tanstack/react-query';
import getPosts from '../../apis/post/getPosts';

const useGetPosts = () => {
  return useQuery(['get/post'], () => getPosts(), {
    staleTime: 10000,
  });
};

export default useGetPosts;
