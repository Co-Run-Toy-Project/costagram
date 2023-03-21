import { useCallback, createRef } from 'react';
import { useRecoilValue } from 'recoil';
import PostBox from './reuse/PostBox';
import useGetPosts from '../hooks/posts/useGetPost';
import useIntersectionObserver from '../hooks/posts/useIntersectionObserver';
import { sortedData } from '../recoil/postAtom';

const RenderPosts = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetPosts();
  const getSortedData = useRecoilValue(sortedData);
  const posts = data?.pages.flatMap(page => page.data) || [];

  const target = createRef<HTMLDivElement>();

  const fetchMore = useCallback(() => {
    if (!isFetchingNextPage && hasNextPage) {
      fetchNextPage();
    }
  }, [isFetchingNextPage, hasNextPage, fetchNextPage]);

  useIntersectionObserver({
    target,
    onIntersect: fetchMore,
    enabled: hasNextPage,
    rootMargin: '0px 0px 40px 0px',
  });

  return (
    <div className="overflow-y-auto h-fit">
      <div>
        {getSortedData.length > 0
          ? getSortedData.map(el => {
              return (
                <div key={el.postId} className="flex justify-center mt-10">
                  <PostBox data={el} />
                </div>
              );
            })
          : posts.map((el: any) => {
              return (
                <div key={el.postId} className="flex justify-center mt-10">
                  <PostBox data={el} />
                </div>
              );
            })}
        {hasNextPage && (
          <div ref={target}>
            {isFetchingNextPage ? 'Loading more...' : 'Load more'}
          </div>
        )}
      </div>
    </div>
  );
};

export default RenderPosts;
