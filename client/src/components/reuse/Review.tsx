import * as dateFns from 'date-fns';
import { ko } from 'date-fns/locale';
import { useEffect, useState } from 'react';

interface Props {
  commentContent: string;
  createdAt: string;
}

const Review = ({ commentContent, createdAt }: Props) => {
  const [meridium, setMeridium] = useState<string>('오전');
  const date: string = dateFns.format(new Date(createdAt), 'PPP', {
    locale: ko,
  });

  const createdTime: string = dateFns.format(new Date(createdAt), 'p', {
    locale: ko,
  });

  const hour = Number(createdTime.slice(0, 2));
  const minute = Number(createdTime.slice(4));

  const [reviewHour, setReviewHour] = useState<number>(hour);

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
      {/* 이미지 링크 필요 */}
      <img
        src="https://velog.velcdn.com/images/hun0613/profile/7516412e-3172-4b0c-9cdf-c29377e7dc34/image.jpeg"
        alt="프로필사진"
        className="w-10 h-10 mr-3 rounded-3xl"
      />
      <div>
        <div className="flex flex-row items-center">
          <strong className="mr-2 text-sm">userName</strong>
          <span className="text-sm">{commentContent}</span>
        </div>
        <span className="mt-1 text-xs text-fontGray">
          {`${date} ${meridium} ${reviewHour}시 ${minute}분`}
        </span>
      </div>
    </div>
  );
};

export default Review;