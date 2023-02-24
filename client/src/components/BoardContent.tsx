import { useState } from 'react';

interface Props {
  postData: {
    userName: string;
    postContent: string;
  };
}

const BoardContent = ({ postData }: Props) => {
  const [showMore, setShowMore] = useState<Boolean>(false);

  const content = postData.postContent;
  const maxLength = 26;

  return (
    <div className="flex flex-row justify-start w-full h-full mt-1">
      <div className="flex-shrink-0 text-sm font-bold w-fit h-fit">
        {postData.userName}
      </div>
      <div className="pl-2 text-sm text-black w-fit h-fit">
        {showMore
          ? content
          : `${content.slice(0, maxLength)}${
              content.length > maxLength ? '...' : ''
            }`}
        {content.length > maxLength && !showMore && (
          <button
            className="pl-2 text-sm cursor-pointer w-fit h-fit text-fontGray"
            onClick={() => setShowMore(true)}
            type="button"
          >
            더 보기
          </button>
        )}
      </div>
    </div>
  );
};

export default BoardContent;
