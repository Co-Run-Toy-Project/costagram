import { useQuery } from '@tanstack/react-query';
import getPostById from '../../apis/posts/getPostById';

interface Props {
  curPostId: number | null;
}

const useGetPostById = ({ curPostId }: Props) => {
  return useQuery([`get/post${curPostId}`], () => getPostById({ curPostId }), {
    enabled: !!curPostId, // curPostId가 있는 경우에만 실행
    staleTime: 1000 * 60 * 5,
  });
};

export default useGetPostById;
