import { useState } from 'react';
import useGetUser from '../../hooks/user/useGetUser';
import PenIcon from '../../assets/PenIcon';
import usePatchDes from '../../hooks/user/usePatchDes';

const MyPageProfile = () => {
  const { data } = useGetUser();
  const resData = data?.data;
  const [clicked, setClicked] = useState<boolean>(false);
  const [introduce, setIntroduce] = useState<string>('');

  const { mutate } = usePatchDes();

  const handleModifyInput = (
    event: React.KeyboardEvent<HTMLTextAreaElement>,
  ) => {
    // if (event.charCode === 13) setClicked(!clicked); -> deprecated
    if (event.key === 'Enter') {
      mutate({
        introduce,
      });

      setClicked(!clicked);
    }
  };

  return (
    <div className="flex flex-col flex-wrap w-full">
      {/* user Info */}
      {data && resData !== undefined ? (
        <div className="flex flex-wrap content-center w-full pb-20 mobile:pl-8 tablet:pl-16 desktop:pl-32 h-72 min-h-max ">
          <div className="w-32 h-32 rounded-full desktop:w-40 desktop:h-40 bg-slate-200 ">
            <img
              className="inset-0 object-cover w-full h-full rounded-full"
              alt="profile"
              src={resData.profileImage}
            />
          </div>
          <div className="flex flex-col pt-4 ml-8">
            <strong className="mb-8 text-3xl">{resData.userName}</strong>
            <span className="mb-4 text-base">
              게시글 {resData.userPostsCount}개
            </span>
            {/* 소개글 */}
            <div className="flex flex-row items-center">
              {clicked ? (
                <textarea
                  className="p-2 rounded outline-none resize-none bg-inputGray"
                  placeholder={resData.introduce}
                  maxLength={300}
                  autoFocus
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                    setIntroduce(e.target.value)
                  }
                  onKeyUp={handleModifyInput}
                  // value={textContent}
                />
              ) : (
                <div className="flex flex-row items-center">
                  <p className="mr-2 text-base">{resData.introduce}</p>
                  {/* <p className="mr-2 text-base">{introduce}</p> */}
                  <PenIcon
                    width={20}
                    height={20}
                    onClick={() => setClicked(!clicked)}
                  />
                </div>
              )}
            </div>
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
            <p className="mb-4 text-base">게시글 00개</p>
            <p className="text-base">-</p>
          </div>
        </div>
      )}
      <hr />
    </div>
  );
};

export default MyPageProfile;
