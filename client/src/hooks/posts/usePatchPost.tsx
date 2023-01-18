import { useMutation, useQueryClient } from '@tanstack/react-query';
import patchPost from '../../apis/posts/patchPost';

interface Props {
  curPostId: number | null;
  textContent: string;
}

const usePatchPost = ({ curPostId, textContent }: Props) => {
  const queryClient = useQueryClient();

  return useMutation(() => patchPost({ curPostId, textContent }), {
    onSuccess: () => {
      queryClient.invalidateQueries(['get/post']);
    },
    onError: err => console.log(err),
  });
};

export default usePatchPost;
