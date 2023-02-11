import { useRecoilState } from 'recoil';
import { modifyModalState } from '../../recoil/modalAtom';
import Navbar from '../../components/Navbar';
import PostModal from '../../components/PostModal';
import ModifyModal from '../../components/ModifyModal';
import TopBtn from '../../components/TopBtn';
import RenderPosts from '../../components/RenderPosts';

const Main = () => {
  const [isModifyOpen, setIsModifyOpen] =
    useRecoilState<boolean>(modifyModalState);

  return (
    <>
      <PostModal />
      {isModifyOpen ? <ModifyModal /> : null}
      <Navbar />
      <RenderPosts />
      <div className="fixed m-5 right-1 bottom-1">
        <TopBtn />
      </div>
    </>
  );
};

export default Main;
