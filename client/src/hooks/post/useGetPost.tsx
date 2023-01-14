import { useQuery, useQueryClient } from '@tanstack/react-query';
import getPosts from '../../apis/post/getPosts';

const useGetPosts = () => {
  const queryClient = useQueryClient();
  queryClient.invalidateQueries(['get/post']);

  return useQuery(['get/post'], () => getPosts(), {
    enabled: false,
  });
};

export default useGetPosts;
