/* eslint-disabled */
import HeartOn from '../../assets/HeartOn';
import useGetUser from '../../hooks/user/useGetUser';
import HeartIcon from '../../assets/HeartIcon';
import SearchIcon from '../../assets/SearchIcon';

const MyProfilePic = () => {
  const { data } = useGetUser();
  const resData = data?.data;
  return (
    <div className="flex flex-wrap justify-center w-full">
      {resData && (
        <div className="grid grid-flow-row grid-cols-2 grid-rows-2 gap-8 mt-8 tablet:grid-cols-3">
          {resData.userPosts.map((el: any) => (
            <div
              className="relative bg-slate-200 w-60 h-60 group"
              key={el.postId}
            >
              <div className="absolute z-10 flex items-center justify-center w-full h-full p-4 cursor-pointer opacity-0 hover:bg-black hover:bg-opacity-60 group-hover:opacity-100">
                <div className="w-20 flex items-center justify-between text-white">
                  <HeartIcon />
                  <p>{el.likeCount}</p>
                  <SearchIcon />
                  <p>{el.commentCount}</p>
                </div>
              </div>
              <img
                src={el.imagePath[0]}
                alt="firstImage"
                className="absolute object-cover object-center w-full h-full cursor-pointer"
              />
            </div>
          ))}
        </div>
      )}
      {data && resData.userPosts.length === 0 ? (
        <div>올린 게시글이 없습니다</div>
      ) : null}
    </div>
  );
};

export default MyProfilePic;
