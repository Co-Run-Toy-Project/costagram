import { useEffect, useState, useRef, useCallback } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import Loading from './Loading';
import useGetPosts from '../hooks/posts/useGetPost';
import PostBox from './reuse/PostBox';

const RenderPosts = () => {
  const { data, error, refetch, status } = useGetPosts();

  useEffect(() => {
    refetch();
  }, []);

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
  console.log(typeof data);
  console.log(Array.isArray(resData));

  const [itemIndex, setItemIndex] = useState(0);

  // 초기값 2개만 저장
  const [post, setPost] = useState(resData.slice(0, 2));
  // 로딩스피너 boolean  state
  // const [isLoding, setIsLoding] = useState(false);

  // scrollTop과 clientHeight를 더한 값이 scrollHeight 값과 같을 때, 즉 스크롤이 화면 맨 끝에 도달했을 때, 다음 5개의 데이터를 렌더링
  const infiniteScroll = useCallback(() => {
    // setIsLoding(true);

    const scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight,
    );
    const scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop,
    );
    let clientHeight = 0;

    clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight === scrollHeight) {
      setItemIndex(itemIndex + 20);
      setPost(post.concat(resData.slice(itemIndex + 5, itemIndex + 10)));
      // setIsLoding(false);
    }
  }, [itemIndex, post]);

  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll, true); // 스크롤 이벤트 등록
    return () => window.removeEventListener('scroll', infiniteScroll, true); // 스크롤 이벤트 삭제(컴포넌트 언마운트시)
  }, [infiniteScroll]);

  return (
    <div className="">
      <div>
        {/* post map으로 나열되는 부분 */}
        {post &&
          post.map((el: any) => {
            return (
              <div key={el.postId} className="flex justify-center mt-10">
                <PostBox key={el.postId} data={el} />
              </div>
            );
          })}
        {/* {isLoding && <Loading />} */}
      </div>
    </div>
  );
};

export default RenderPosts;
