import { useQuery } from '@tanstack/react-query';
import getPostById from '../../apis/posts/getPostById';

type Props = {
  selectedId: number | null;
};

const useGetPostById = ({ selectedId }: Props) => {
  return useQuery(
    [`get/post${selectedId}`],
    () => getPostById({ selectedId }),
    {
      // enabled: false,
      staleTime: 1000 * 60,
    },
  );
};

export default useGetPostById;
