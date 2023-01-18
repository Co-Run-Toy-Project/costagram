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
      <div className="fixed m-5 right-1 bottom-1">
        <TopBtn />
      </div>
    </>
  );
};

export default Main;
