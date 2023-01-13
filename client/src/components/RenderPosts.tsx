import { useEffect } from 'react';
import useGetPosts from '../hooks/post/useGetPost';
import PostBox from './reuse/PostBox';

const RenderPosts = () => {
  const { data, refetch } = useGetPosts();
  useEffect(() => {
    refetch();
  }, []);
  console.log(data);
  const resData = data?.data;

  return (
    <div>
      {resData &&
        resData.map((el: any) => <PostBox key={el.postId} data={el} />)}
    </div>
  );
};

export default RenderPosts;
