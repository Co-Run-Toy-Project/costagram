/* eslint-disable */
import HeartOn from "../assets/HeartOn";
import HeartOff from "../assets/HeartOff";
import { useState } from "react";

const LikeComp = () => {
    const [isLike, setIsLike] = useState<boolean>(false);

    const handleHeartClick = () => {
        setIsLike(!isLike)
    }

  return (
    <>
      <div className="w-full h-fit flex-col justify-start items-center">
        <div>
            {isLike ? <HeartOn onClick={handleHeartClick}/> : <HeartOff onClick={handleHeartClick}/>}
        </div>
        <div className="pt-2 text-sm text-black">좋아요 10개</div>
      </div>
    </>
  );
};

export default LikeComp;
