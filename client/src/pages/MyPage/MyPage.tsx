/* eslint-disable */

import MyPageProfile from './MyPageProfile';
import MyProfilePic from './MyPagePic';

const MyPage = () => {
  // console.log(data);

  return (
    <div className="flex flex-wrap justify-center w-full h-screen pt-20 ">
      <MyPageProfile />
      <MyProfilePic />
    </div>
  );
};

export default MyPage;
