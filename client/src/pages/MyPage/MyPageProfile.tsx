import useGetUser from '../../hooks/user/useGetUser';

const MyPageProfile = () => {
  const { data } = useGetUser();
  const resData = data?.data;

  return (
    <div className="flex flex-col w-full">
      {data && resData !== undefined ? (
        <div className="flex flex-wrap content-center w-full pb-20 pl-80 h-72 min-h-max">
          <div className="w-40 h-40 rounded-full bg-slate-200 ">
            <img
              className="inset-0 object-cover w-full h-full rounded-full"
              alt="profile"
              src={resData.profileImage}
            />
          </div>
          <div className="pt-4 ml-8">
            <div className="mb-8 text-3xl">{resData.userName}</div>
            <p className="mb-4 text-base">
              게시글 숫자 {resData.userPostsCount}개
            </p>
            <p className="text-base">{resData.introduce}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap content-center w-full pb-20 pl-80 h-72 min-h-max">
          <div className="w-40 h-40 rounded-full bg-slate-200 ">
            <img
              className="inset-0 object-cover w-full h-full rounded-full"
              alt="profile"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
            />
          </div>
          <div className="pt-4 ml-8">
            <div className="mb-8 text-3xl">회원 가입을 진행해 주세요</div>
            <p className="mb-4 text-base">게시글 숫자 00개</p>
            <p className="text-base">-</p>
          </div>
        </div>
      )}
      <hr />
    </div>
  );
};

export default MyPageProfile;
