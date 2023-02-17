/* eslint-disabled */
import HeartOn from '../../assets/HeartOn';
import useGetUser from '../../hooks/user/useGetUser';

const HeartIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 82 82"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_217_47)">
        <path
          d="M60.475 5.125C51.8548 5.125 44.4389 12.136 41.0051 19.4596C37.5663 12.136 30.1504 5.125 21.5301 5.125C9.65038 5.125 0.00512695 14.7702 0.00512695 26.65C0.00512695 50.8195 24.3899 57.1591 41.0051 81.057C56.7133 57.3077 82.0051 50.0507 82.0051 26.65C82.0051 14.7651 72.3599 5.125 60.4801 5.125H60.475Z"
          fill="#FFFFFF"
        />
      </g>
      <defs>
        <clipPath id="clip0_217_47">
          <rect width="82" height="82" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

const SearchIcon = () => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 27 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.5 1.6875C20.9554 1.6875 27 6.59812 27 12.6562C27 18.7144 20.9554 23.625 13.5 23.625C12.7845 23.625 12.0808 23.5794 11.3957 23.4917C8.49656 26.3908 5.03381 26.9122 1.6875 26.9882V26.2777C3.49481 25.3918 5.0625 23.7802 5.0625 21.9375C5.0625 21.681 5.04225 21.4279 5.00513 21.1815C1.95244 19.17 0 16.0987 0 12.6562C0 6.59812 6.04462 1.6875 13.5 1.6875Z"
        fill="#FFFFFF"
      />
    </svg>
  );
};

const MyProfilePic = () => {
  const { data } = useGetUser();
  const resData = data?.data;
  return (
    <div className="flex flex-wrap justify-center w-full">
      {resData !== undefined ? (
        <div className="grid grid-flow-row grid-cols-2 grid-rows-2 gap-8 mt-8 tablet:grid-cols-3">
          {resData.userPosts.map((el: any) => (
            <div
              className="relative w-40 h-40 tablet:w-60 tablet:h-60 bg-slate-200"
              key={el.postId}
            >
              <div className="absolute z-20 flex flex-row flex-wrap content-center justify-center w-full h-full opacity-0 cursor-pointer bg-slate-700 hover:opacity-60">
                <div className="flex flex-row flex-wrap content-center justify-between w-20 text-white h-fit">
                  <HeartIcon />
                  {el.likeCount}
                  <SearchIcon />
                  {el.commentCount}
                </div>
              </div>
              <img
                src={el.imagePath[0]}
                alt="firstImage"
                className="absolute z-10 w-full h-full object-cover object-center cursor-pointer"
              />
            </div>
          ))}
        </div>
      ) : null}
      {data && resData.userPosts.length === 0 ? (
        <div>올린 게시글이 없습니다</div>
      ) : null}
    </div>
  );
};

export default MyProfilePic;
