import { useMutation, useQueryClient } from '@tanstack/react-query';
import patchDes from '../../apis/user/patchDes';

const usePatchPost = () => {
  const queryClient = useQueryClient();

  return useMutation(patchDes, {
    onSuccess: () => {
      queryClient.invalidateQueries(['get/user']);
    },
    onError: err => console.log(err),
  });
};

export default usePatchPost;
