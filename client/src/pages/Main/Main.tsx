import Navbar from '../../components/Navbar';
import PostBox from '../../components/PostBox';
import PostModal from '../../components/PostModal';
import BoardContainer from '../../components/reuse/BoardContainer';
import TopBtn from '../../components/TopBtn';
import MyPage from '../MyPage/MyPage';

const Main = () => {
  return (
    <>
      <PostModal />
      <Navbar />
      <div className="mt-[100px] flex justify-center">
        <PostBox />
      </div>
      <div className="fixed m-5 right-1 bottom-1">
        <TopBtn />
      </div>
      <BoardContainer />
    </>
  );
};

export default Main;
