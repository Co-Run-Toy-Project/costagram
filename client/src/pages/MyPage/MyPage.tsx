import MyPageProfile from './MyPageProfile';
import MyProfilePic from './MyPagePic';
import Navbar from '../../components/Navbar';

const MyPage = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap justify-center w-full h-screen pt-20">
        <MyPageProfile />
        <div className="w-full bg-gray-100 border-t-2 border-gray-200">
          <MyProfilePic />
        </div>
      </div>
    </div>
  );
};

export default MyPage;
