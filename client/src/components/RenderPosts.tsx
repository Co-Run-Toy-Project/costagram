import { useCallback, useEffect, useRef, useState } from 'react';
import axios from 'axios';
import PostBox from './reuse/PostBox';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const RenderPosts = () => {
  // 기존 데이터
  const [posts, setPosts] = useState<Post[]>([]);
  // 다음 데이터 요청 여부
  const [hasNextPage, setHasNextPage] = useState<boolean>(true);
  // 첫 페이지 시작
  const page = useRef<number>(1);
  // observerTargetEl 마지막 게시물 감지
  const observerTargetEl = useRef<HTMLDivElement>(null);

  const baseURL = process.env.REACT_APP_BASE_URL;
  //  LIMIT 한 페이지에서 불러올 게시물 개수
  const LIMIT = 2;

  const fetch = useCallback(async () => {
    try {
      const { data } = await axios.get<Post[]>(
        `${baseURL}/post?page=${page.current}&perPage=${LIMIT}`,
      );
      setPosts(prevPosts => [...prevPosts, ...data]);
      setHasNextPage(data.length === LIMIT);
      if (data.length) {
        page.current += 1;
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  useEffect(() => {
    if (!observerTargetEl.current || !hasNextPage) {
      return;
    }
    const io = new IntersectionObserver((entries, observer) => {
      if (entries[0].isIntersecting) {
        fetch();
      }
    });

    io.observe(observerTargetEl.current);

    // eslint-disable-next-line
    return () => {
      io.disconnect();
    };
  }, [fetch, hasNextPage]);

  return (
    <div className="overflow-y-auto h-fit">
      <div>
        {posts &&
          posts.map((el: any, idx: number) => {
            return (
              <div key={el.postId} className="flex justify-center mt-10">
                <PostBox data={el} />
              </div>
            );
          })}
        <div ref={observerTargetEl} />
      </div>
    </div>
  );
};

export default RenderPosts;
