import useGetUser from '../../hooks/user/useGetUser';

const MyProfilePic = () => {
  const { data } = useGetUser();
  const resData = data?.data;
  return (
    <div className="flex flex-wrap justify-center w-full">
      {data && resData !== undefined ? (
        <div className="grid grid-flow-row grid-cols-3 grid-rows-2 gap-8 mt-8">
          {resData.userPosts.map((el: any) => (
            <div className="w-60 h-60 bg-slate-200 group-hover:brightness-50">
              <img
                src={el.imagePath}
                alt="firstImage"
                className="object-cover cursor-pointer "
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="hover:text-blue-200">올린 게시글이 없습니다</div>
      )}
    </div>
  );
};

export default MyProfilePic;
