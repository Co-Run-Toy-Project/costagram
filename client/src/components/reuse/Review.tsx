import * as dateFns from 'date-fns';
import { ko } from 'date-fns/locale';
import { useEffect, useState } from 'react';
import BasicUserImage from '../../assets/BasicUserImage';
import useDeleteReview from '../../hooks/review/useDeleteReview';

interface Props {
  userName: string;
  commentContent: string;
  createdAt: string;
  commentId: number;
  postId: number;
  profileImage: string;
}

const Review = ({
  userName,
  commentContent,
  createdAt,
  commentId,
  postId,
  profileImage,
}: Props) => {
  const [meridium, setMeridium] = useState<string>('오전');
  const date: string = dateFns.format(new Date(createdAt), 'PPP', {
    locale: ko,
  });

  const createdTime: string = dateFns.format(new Date(createdAt), 'p', {
    locale: ko,
  });

  const hour: number = Number(createdTime.slice(0, 2));
  const minute: number = Number(createdTime.slice(3));

  const [reviewHour, setReviewHour] = useState<number>(hour);

  const userProfile = `${localStorage.getItem('profileImage')}`;
  const myName = `${localStorage.getItem('userName')}`;

  const { mutate } = useDeleteReview();

  const handleDeleteBtn = () => {
    const res = window.confirm('정말로 삭제하시겠습니까?');
    if (res) {
      mutate({ postId, commentId });
    }
  };

  useEffect(() => {
    if (hour < 12) {
      setMeridium('오전');
      setReviewHour(hour);
    } else if (hour >= 12) {
      setMeridium('오후');
      setReviewHour(hour - 12);
    }
  }, [createdAt]);

  return (
    <div className="flex flex-row items-center w-full mt-3 h-fit">
      {userName !== 'TEST유저' ? (
        <img
          src={profileImage}
          alt="프로필 사진"
          className="w-10 h-10 mr-3 rounded-3xl"
        />
      ) : (
        <div className="ml-[-1px] mr-2">
          <BasicUserImage width={44} height={44} />
        </div>
      )}
      <div className="w-[80%]">
        <div className="flex flex-row items-center">
          <strong className="mr-2 text-sm">{userName}</strong>
          <span className="text-sm">{commentContent}</span>
        </div>
        <span className="mt-1 text-xs text-fontGray">
          {`${date} ${meridium} ${reviewHour}시 ${minute}분`}
        </span>
      </div>
      {userName === localStorage.getItem('userName') ? (
        <button
          type="button"
          className="right-0 text-sm cursor-pointer text-likesRed"
          onClick={handleDeleteBtn}
        >
          삭제
        </button>
      ) : null}
    </div>
  );
};

export default Review;
