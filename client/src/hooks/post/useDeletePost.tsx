import { useMutation } from '@tanstack/react-query';
import deletePost from '../../apis/post/deletePost';

interface Props {
  boardId: number;
}

const useDeletePost = ({ boardId }: Props) => {
  return useMutation(deletePost);
};

export default useDeletePost;
