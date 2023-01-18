import { useMutation, useQueryClient } from '@tanstack/react-query';
import patchPost from '../../apis/posts/patchPost';

interface Props {
  postId: number;
  textContent: string;
}

const usePatchPost = ({ postId, textContent }: Props) => {
  const queryClient = useQueryClient();

  return useMutation(() => patchPost({ postId, textContent }), {
    onSuccess: () => {
      queryClient.invalidateQueries(['get/post']);
    },
  });
};

export default usePatchPost;
