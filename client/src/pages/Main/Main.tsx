import Navbar from '../../components/Navbar';
import PostModal from '../../components/PostModal';
import ModifyModal from '../../components/ModifyModal';
import TopBtn from '../../components/TopBtn';
// import MyPage from '../MyPage/MyPage';
import RenderPosts from '../../components/RenderPosts';

const Main = () => {
  return (
    <>
      <PostModal />
      <Navbar />
      <RenderPosts />
      <TopBtn />
    </>
  );
};

export default Main;
