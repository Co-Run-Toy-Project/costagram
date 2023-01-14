import { useQuery } from '@tanstack/react-query';
import getPosts from '../../apis/post/getPosts';

const useGetPosts = () => {
  return useQuery(['get/post'], () => getPosts(), {
    staleTime: 1000 * 60 * 5, // 5분 동안은 fetch가 되지 않음
  });
};

export default useGetPosts;
