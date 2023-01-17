import React, { useState } from 'react';
import { useRecoilState } from 'recoil';
import { clickBackState, modifyModalState } from '../recoil/modalAtom';

import UploadPhotoIcon from '../assets/UploadPhotoIcon';
import CancelModal from './reuse/CancelModal';
import ModalButton from './reuse/ModalButton';
import BackwardIcon from '../assets/BackwardIcon';
import usePatchPost from '../hooks/posts/usePatchPost';

interface Props {
  selectedData: {
    userName: string;
    postContent: string;
    postId: number;
  };
}

const ModifyModal = ({ selectedData }: Props) => {
  const [isClicked, setIsClicked] = useRecoilState<boolean>(clickBackState);
  const [isModifyOpen, setIsModifyOpen] =
    useRecoilState<boolean>(modifyModalState);
  const [textContent, setTextContent] = useState(selectedData.postContent);

  const { postId } = selectedData;

  const { mutate } = usePatchPost({ postId, textContent });

  const handleModifyPost = () => {
    mutate();
    setIsModifyOpen(!isModifyOpen);
  };

  const handleBackPost = () => {
    setIsClicked(!isClicked);
  };

  /* eslint-disable no-param-reassign */
  const handleClearContent = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    // const tempValue = event.target.value;
    event.target.value = '';
    // event.target.value = tempValue;
  };

  const handleChangeContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextContent(e.target.value);
  };

  return (
    <div className="flex fixed top-0 left-0 z-50 h-full w-full items-center justify-center bg-[rgba(0,0,0,0.6)]">
      <CancelModal />
      <form className="top-1/4 flex h-[60%] w-[70%] flex-col bg-white tablet:flex-row tablet:min-w-mobile">
        {/* 이미지 첨부 부분 */}
        <div className="p-2 h-1/2 bg-likesGray tablet:h-full tablet:w-1/2 tablet:p-4">
          {/* 뒤로가기(취소) 버튼 */}
          <BackwardIcon onClick={handleBackPost} />

          <div className="mt-[-2rem] flex h-full w-full flex-row items-center justify-center">
            <input className="hidden" id="file" type="file" accept="image/*" />
            <label
              htmlFor="file"
              className="flex flex-col items-center pt-2 text-inputFontGray"
            >
              <UploadPhotoIcon />
              클릭하여 이미지 첨부
            </label>
          </div>
        </div>

        {/* 게시글 작성 부분 */}
        <div className="flex flex-col p-3 space-y-3 h-1/2 tablet:h-full tablet:w-1/2">
          {/* simple user info */}
          <div className="flex flex-row items-center">
            {/* user profile 임시icon 지정 */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#818181"
                className="w-8 h-8"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <span className="pl-2 font-">{selectedData.userName}</span>
          </div>

          <div className="h-1/3">
            <textarea
              placeholder="  내용을 입력하세요"
              maxLength={2000}
              className="w-full outline-none resize-none"
              value={textContent}
              // autoFocus
              onFocus={handleClearContent}
              onChange={handleChangeContent}
              // onKeyDown={}
            />
          </div>

          {/* map api 위치 */}
          <div className="h-1/2 bg-inputGray">수정 모달</div>

          <ModalButton onClick={handleModifyPost}>저장</ModalButton>
        </div>
      </form>
    </div>
  );
};

export default ModifyModal;
