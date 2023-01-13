const BoardContent = () => {
  return (
    <>
      <div className="w-full h-full flex flex-row justify-start items-center mt-1">
        <div className="w-fit h-fit text-fontGray text-sm">userId</div>
        <div className="w-fit h-fit text-black text-sm pl-2">
          안녕하세요! 이것은 게시글 본문...
        </div>
        <div className="w-fit h-fit text-fontGray text-sm pl-2 cursor-pointer">
          더보기
        </div>
      </div>
    </>
  );
};

export default BoardContent;
