import { useEffect, useState, useRef } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading';
import useGetPosts from '../hooks/posts/useGetPost';
import PostBox from './reuse/PostBox';

const RenderPosts = () => {
  const { data, error, refetch, status } = useGetPosts();
  const [isNextPage, setIsNextPage] = useState(false);
  useEffect(() => {
    refetch();
  }, []);

  // 스크롤을 감지하여 다음 데이터를 불러오는 boolean값을 설정
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight + 25;
      const scrolled = Math.ceil(window.pageYOffset);
      if (scrolled === scrollable) {
        setIsNextPage(true);
      } else if (scrolled !== scrollable) {
        setIsNextPage(false);
      }
    });
  });
  // 데이터로드 되기 전의 로딩 스피너
  if (status === 'loading') return <Loading />;

  // 데이터가 정상적으로 로드 되지 않았을 경우 보이는 문구
  if (status === 'error')
    return (
      <div className="flex items-center justify-center text-lg text-center">
        피드를 불러올 수 없습니다. <br />
        {`${error}` as string}
      </div>
    );
  const resData = data?.data;

  return (
    <div className="overflow-y-auto h-fit">
      <InfiniteScroll
        className="overflow-y-auto h-fit"
        // 데이터를 불러오는 함수
        next={() => refetch()}
        // 다음 페이지를 불러오는가를 정하는 boolean값 true:요청O false:요청X
        hasMore={isNextPage}
        // 로딩 문구&스피너
        loader={<Loading />}
        // 몇 개의 데이터를 나열 할 것인가
        dataLength={resData ? resData.length : 0}
      >
        <div>
          {/* post map으로 나열되는 부분 */}
          {resData &&
            resData.map((el: any) => {
              return (
                <div key={el.postId} className="flex justify-center mt-10">
                  <PostBox key={el.postId} data={el} />
                </div>
              );
            })}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default RenderPosts;
