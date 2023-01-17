/* eslint-disable */
import { useState } from 'react';
import SearchIcon from '../assets/SearchIcon';

const SearchComp = () => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  const [reviewValue, setReviewValue] = useState<string>('');

  const handleFocusInput = () => {
    setIsFocus(true);
  };

  const handleBlurInput = () => {
    setIsFocus(false);
  };

  const handleInputChange = (e: any) => {
    setReviewValue(e.target.value);
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
      {!isFocus ? (
        <button type="button" className="w-fit h-fit p-1 text-sm text-postBlue">
          게시
        </button>
      ) : (
        <button
          type="button"
          className="w-fit h-fit p-1 text-sm text-postDeepBlue"
        >
          게시
        </button>
      )}
    </div>
  );
};

export default SearchComp;
