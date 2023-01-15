import { useMutation } from '@tanstack/react-query';
import patchPost from '../../apis/post/patchPost';

interface Props {
  boardId: number;
}

const usePatchPost = ({ boardId }: Props) => {
  return useMutation(patchPost);
};

export default usePatchPost;
