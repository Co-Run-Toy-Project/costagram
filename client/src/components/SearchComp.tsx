/* eslint-disable */
import { useState } from 'react';
import SearchIcon from '../assets/SearchIcon';
import usePostReview from '../hooks/review/usePostReview';

interface Props {
  postId: number;
}

const SearchComp = ({ postId }: Props) => {
  const [isFocus, setIsFocus] = useState<string>('postBlue');
  const [reviewValue, setReviewValue] = useState<string>('');

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
    }
  };
  return (
    <div className="flex flex-row p-1 w-full h-[50px] border-t-2 mt-2 justify-between items-center">
      <SearchIcon />
      <input
        type="text"
        placeholder="내용을 입력하세요"
        className="ml-2 text-sm w-5/6 outline-none"
        value={reviewValue}
        onChange={handleInputChange}
        onFocus={handleFocusInput}
        onBlur={handleBlurInput}
      />
      <button
        type="button"
        className={
          isFocus === 'postBlue'
            ? `w-fit h-fit p-1 text-sm text-postBlue cursor-default`
            : `w-fit h-fit p-1 text-sm text-postDeepBlue cursor-default`
        }
        onClick={handleSubmit}
      >
        게시
      </button>
    </div>
  );
};

export default SearchComp;
