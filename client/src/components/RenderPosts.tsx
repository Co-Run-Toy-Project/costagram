import { useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useEffect, useRef } from 'react';
import PostBox from './reuse/PostBox';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const LIMIT = 2;

const RenderPosts = () => {
  const fetchPosts = async ({ pageParam = 1 }) => {
    const { data } = await axios.get(`/post`, {
      baseURL: process.env.REACT_APP_BASE_URL,
      headers: {
        withCredentials: true,
        Authorization: `${localStorage.getItem('token')}`,
        'Content-Type': `application/json`,
      },
      params: {
        page: pageParam,
        perPage: LIMIT,
      },
    });
    return { data, nextPage: data.length === LIMIT ? pageParam + 1 : null };
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery<Post[]>(['get/post'], fetchPosts, {
      getNextPageParam: lastPage => lastPage.nextPage,
    });

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

    return () => {
      observer.disconnect();
    };
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
