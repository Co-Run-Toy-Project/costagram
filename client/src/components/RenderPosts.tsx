import { useEffect } from 'react';
import useGetPosts from '../hooks/posts/useGetPost';
import PostBox from './reuse/PostBox';

const RenderPosts = () => {
  const { data, refetch } = useGetPosts();
  useEffect(() => {
    refetch();
  }, []);

  const resData = data?.data;

  return (
    <div>
      {resData &&
        resData.map((el: any) => {
          return (
            <div key={el.postId} className="flex justify-center mt-10">
              <PostBox key={el.postId} data={el} />
            </div>
          );
        })}
    </div>
  );
};

export default RenderPosts;
