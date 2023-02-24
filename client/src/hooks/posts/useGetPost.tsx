import { useInfiniteQuery } from '@tanstack/react-query';
import getPosts from '../../apis/posts/getPosts';

const useGetPosts = () => {
  return useInfiniteQuery(['get/post'], getPosts, {
    staleTime: 1000 * 60 * 5, // 5분 동안은 fetch가 되지 않음
    getNextPageParam: lastPage => lastPage.nextPage,
  });
};

export default useGetPosts;
