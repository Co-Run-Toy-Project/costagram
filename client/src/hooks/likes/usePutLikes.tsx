import { useMutation, useQueryClient } from '@tanstack/react-query';
import putLikes from '../../apis/likes/putLikes';

const usePutLikes = () => {
  const queryClient = useQueryClient();

  return useMutation(putLikes, {
    onSuccess: () => {
      queryClient.invalidateQueries(['get/post']);
    },
    onError: err => console.log(err),
  });
};
export default usePutLikes;
