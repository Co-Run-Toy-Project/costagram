import { useState } from 'react';

interface Props {
  postData: {
    userName: string;
    postContent: string;
  };
}

const BoardContent = ({ postData }: Props) => {
  const [clicked, setClicked] = useState<boolean>(false);
  const contentLength = postData.postContent.length;

  return (
    <div className="flex flex-row items-center justify-start w-full h-full mt-1">
      <div className="text-sm w-fit h-fit text-fontGray">
        {postData.userName}
      </div>
      {clicked ? (
        <div className="pl-2 text-sm text-black w-[22rem] h-fit">
          {postData.postContent}
        </div>
      ) : (
        <div className="pl-2 text-sm text-black w-52 h-fit">
          {postData.postContent}
        </div>
      )}
      {/* {!clicked &&(contentLength > 23) ? <button type="button">더보기</button> : null} */}

      <button
        type="button"
        className="pl-2 text-sm cursor-pointer text-fontGray"
      >
        더보기
      </button>
    </div>
  );
};

export default BoardContent;
