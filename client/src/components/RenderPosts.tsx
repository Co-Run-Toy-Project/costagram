import { useEffect, useRef } from 'react';
import PostBox from './reuse/PostBox';
import useGetPosts from '../hooks/posts/useGetPost';

const RenderPosts = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGetPosts();

  const posts = data?.pages.flatMap(page => page.data) || [];

  const observerTargetEl = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!observerTargetEl.current || !hasNextPage || isFetchingNextPage) {
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      },
      {
        rootMargin: '0px 0px 100% 0px',
      },
    );

    observer.observe(observerTargetEl.current);
  }, [fetchNextPage, hasNextPage, isFetchingNextPage]);

  return (
    <div className="overflow-y-auto h-fit">
      <div>
        {posts.map((el: any) => {
          return (
            <div key={el.postId} className="flex justify-center mt-10">
              <PostBox data={el} />
            </div>
          );
        })}
        {hasNextPage && (
          <div ref={observerTargetEl}>
            {isFetchingNextPage ? 'Loading more...' : 'Load more'}
          </div>
        )}
      </div>
    </div>
  );
};

export default RenderPosts;
