import { useMutation } from '@tanstack/react-query';
import patchPost from '../../apis/posts/patchPost';

const usePatchPost = () => {
  return useMutation(patchPost);
};

export default usePatchPost;
