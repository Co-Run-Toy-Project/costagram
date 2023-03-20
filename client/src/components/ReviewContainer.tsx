import { useState } from 'react';
import Review from './reuse/Review';

interface Comment {
  userName: string;
  commentContent: string;
  commentId: number;
  createdAt: string;
  profileImage: string;
  postId: number;
}

interface Props {
  aboutReview: {
    reviewData: Array<Comment>;
    reviewCount: number;
    reviewUserName: string;
  };
}

const ReviewContainer = ({ aboutReview }: Props) => {
  const [isViewReview, setIsViewReview] = useState<boolean>(false);
  const reviewArr = aboutReview.reviewData;

  const handleReviewClick = () => {
    setIsViewReview(!isViewReview);
  };

  return (
    <div className="flex flex-col items-start justify-center w-full h-fit">
      {aboutReview.reviewCount ? (
        <button
          type="button"
          className="mt-3 text-sm cursor-pointer w-fit h-fit text-fontGray"
          onClick={handleReviewClick}
        >
          댓글 {aboutReview.reviewCount}개 모두보기
        </button>
      ) : (
        <span className="mt-3 text-sm w-fit h-fit text-fontGray">댓글 0개</span>
      )}

      {isViewReview ? (
        <div className="w-full">
          {reviewArr.map(el => {
            const {
              userName,
              commentContent,
              createdAt,
              profileImage,
              commentId,
              postId,
            } = el;

            return (
              <Review
                key={postId}
                commentContent={commentContent}
                createdAt={createdAt}
                profileImage={profileImage}
                userName={userName}
                commentId={commentId}
                postId={postId}
              />
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default ReviewContainer;
