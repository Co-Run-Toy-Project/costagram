/* eslint-disable */
import HeartOn from '../assets/HeartOn';
import HeartOff from '../assets/HeartOff';
import { useState } from 'react';
import usePutLikes from '../hooks/likes/usePutLikes';

interface likesProp {
  postId: number;
  likes?: number;
}

const LikeComp = ({ postId, likes }: likesProp) => {
  const [isLike, setIsLike] = useState<boolean>(false);

  const { mutate } = usePutLikes();

  const handleHeartClick = () => {
    mutate({ postId });
    setIsLike(!isLike);
  };

  return (
    <>
      <div className="flex-col items-center justify-start w-full h-fit">
        <div>
          {isLike ? (
            <HeartOn onClick={handleHeartClick} />
          ) : (
            <HeartOff onClick={handleHeartClick} />
          )}
        </div>
        <div className="pt-2 text-sm text-black">{`좋아요 ${likes}개`}</div>
      </div>
    </>
  );
};

export default LikeComp;
