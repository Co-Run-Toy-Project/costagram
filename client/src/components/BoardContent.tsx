interface Props {
  postData: {
    userId: number;
    postContent: string;
  };
}

const BoardContent = ({ postData }: Props) => {
  return (
    <>
      <div className="flex flex-row items-center justify-start w-full h-full mt-1">
        <div className="text-sm w-fit h-fit text-fontGray">
          {postData.userId}
        </div>
        <div className="pl-2 text-sm text-black w-fit h-fit">
          {postData.postContent}
        </div>
        <div className="pl-2 text-sm cursor-pointer w-fit h-fit text-fontGray">
          더보기
        </div>
      </div>
    </>
  );
};

export default BoardContent;
