import { useState } from 'react';

const ReviewContainer = () => {
  const [isViewReview, setIsViewReview] = useState<boolean>(false);

  const handleReviewClick = () => {
    setIsViewReview(!isViewReview);
  };

  return (
    <div className="flex flex-col w-full h-fit justify-center items-start">
      <button
        type="button"
        className="w-fit h-fit text-sm text-fontGray mt-3 cursor-pointer"
        onClick={handleReviewClick}
      >
        댓글 22개 모두보기
      </button>
      {isViewReview ? (
        <div className="flex flex-row w-full h-fit mt-3">
          <img
            src="https://velog.velcdn.com/images/hun0613/profile/7516412e-3172-4b0c-9cdf-c29377e7dc34/image.jpeg"
            alt="프로필사진"
            className="w-12 h-12 rounded-3xl"
          />
          <div className="flex flex-col w-fit h-full justify-center items-start ml-3">
            <div className="flex flex-row w-fit h-fit justify-center items-center">
              <div className="w-fit h-fit text-sm font-bold">UserId</div>
              <div className="w-fit h-fit text-sm ml-1">뭐야 ㅋㅋㅋ</div>
            </div>
            <div className="w-fit h-fit text-xs text-fontGray mt-1">
              2022년 12월 28일 오후 5시 31분
            </div>
          </div>
        </div>
      ) : null}
      <div className="w-fit h-fit text-xs text-fontGray mt-2">
        2022년 12월 28일 오후 5시 31분
      </div>
    </div>
  );
};

export default ReviewContainer;
