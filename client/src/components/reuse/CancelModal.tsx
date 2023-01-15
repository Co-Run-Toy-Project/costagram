import { useRecoilState } from 'recoil';
import {
  postModalState,
  clickBackState,
  modifyModalState,
} from '../../recoil/modalAtom';
import ModalButton from './ModalButton';

const CancelModal = () => {
  const [isPostModalOpen, setIsPostModalOpen] = useRecoilState(postModalState);
  const [isModifyModalOpen, setIsModifyModalOpen] =
    useRecoilState(modifyModalState);
  const [isClicked, setIsClicked] = useRecoilState<boolean>(clickBackState);

  const handleCancelModal = () => {
    setIsClicked(!isClicked);
  };

  const handleConfirmModal = () => {
    setIsClicked(!isClicked);

    // postModal이 true가 아니라면 ModifyModal이 열려있다는 의미
    return isPostModalOpen
      ? setIsPostModalOpen(!isPostModalOpen)
      : setIsModifyModalOpen(!isModifyModalOpen);
  };

  return (
    <div
      className={`${
        (isModifyModalOpen || isPostModalOpen) && isClicked ? 'flex' : 'hidden'
      } flex-col justify-around items-center fixed p-2 top-1/3 tablet:top-8 desktop:left-1/3 bg-white border-2 rounded-md h-44 tablet:h-48 w-80 tablet:w-[28rem] z-99 drop-shadow-lg`}
    >
      <strong className="text-xl">작성을 취소하시겠습니까?</strong>

      <span className="text-red-500">작성 중인 내용은 저장되지 않습니다.</span>

      <div className="flex flex-row">
        <ModalButton onClick={handleConfirmModal}>확인</ModalButton>
        <ModalButton onClick={handleCancelModal}>취소</ModalButton>
      </div>
    </div>
  );
};

export default CancelModal;
