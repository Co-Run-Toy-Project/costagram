import 'tailwindcss/tailwind.css';

const MyPage = () => {
  return (
    <div className="flex flex-wrap justify-center w-full h-screen pt-20 ">
      <div className="flex flex-col w-full">
        <div className="flex flex-wrap content-center w-full pb-20 pl-80 h-72 min-h-max">
          <div className="w-40 h-40 rounded-full bg-slate-200 "></div>
          <div className="pt-4 ml-8">
            <div className="mb-8 text-3xl">nickName</div>
            <div className="mb-4 text-base">게시글 숫자 00개</div>
            <div className="text-base">마이페이지 자기소개글</div>
          </div>
        </div>
        <div className="w-10/12 border-0 border-t-2 ml-28"></div>
      </div>
      <div className="flex flex-wrap justify-center w-full">
        <div className="grid grid-flow-row grid-cols-3 grid-rows-2 gap-8 mt-8">
          <div className="w-60 h-60 bg-slate-200"></div>
          <div className="w-60 h-60 bg-slate-200"></div>
          <div className="w-60 h-60 bg-slate-200"></div>
          <div className="w-60 h-60 bg-slate-200"></div>
          <div className="w-60 h-60 bg-slate-200"></div>
          <div className="w-60 h-60 bg-slate-200"></div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
