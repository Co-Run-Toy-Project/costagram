import MyPageProfile from './MyPageProfile';
import MyProfilePic from './MyPagePic';
import Navbar from '../../components/Navbar';

const MyPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap justify-center w-full h-screen pt-20 ">
        <MyPageProfile />
        <MyProfilePic />
      </div>
    </div>
  );
};

export default MyPage;
