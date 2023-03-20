/* eslint-disable */
import { ReactElement, useState } from 'react';
import usePostReview from '../hooks/review/usePostReview';
import BasicUserImage from '../assets/BasicUserImage';

interface Props {
  postId: number;
}

const SearchComp = ({ postId }: Props) => {
  const [isFocus, setIsFocus] = useState<string>('postBlue');
  const [reviewValue, setReviewValue] = useState<string>('');

  const userProfileImg = localStorage.getItem('profileImage');

  const { mutate } = usePostReview();

  const handleFocusInput = () => {
    setIsFocus('postDeepBlue');
  };

  const handleBlurInput = () => {
    setIsFocus('postBlue');
  };

  const handleInputChange = (e: any) => {
    setReviewValue(e.target.value);
  };

  const handleSubmit = () => {
    if (!localStorage.getItem('token')) {
      let res = window.confirm('로그인이 필요합니다\n로그인하시겠습니까?');
      if (res) {
        window.location.href = '/login';
      }
    } else {
      mutate({ postId, reviewValue });
      setReviewValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };
  return (
    <div className="flex flex-row py-1 w-full h-[50px] border-t-2 mt-2 justify-between items-center">
      {userProfileImg ? (
        <img src={userProfileImg} className="w-10 h-10 rounded-3xl" />
      ) : (
        <BasicUserImage width={40} height={40} />
      )}
      <input
        type="text"
        placeholder="내용을 입력하세요"
        className="w-[80%] ml-1 text-sm outline-none"
        value={reviewValue}
        onChange={handleInputChange}
        onFocus={handleFocusInput}
        onBlur={handleBlurInput}
        onKeyDown={handleKeyDown}
      />
      <button
        type="button"
        className={
          isFocus === 'postBlue'
            ? `w-fit h-fit text-sm text-postBlue cursor-default px-2`
            : `w-fit h-fit text-sm text-postDeepBlue cursor-default px-2`
        }
        onClick={handleSubmit}
      >
        게시
      </button>
    </div>
  );
};

export default SearchComp;
