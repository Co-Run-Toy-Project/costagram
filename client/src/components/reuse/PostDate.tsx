import * as dateFns from 'date-fns';
import { ko } from 'date-fns/locale';
import { useEffect, useState } from 'react';

interface Props {
  createdAt: string;
}

const PostDate = ({ createdAt }: Props) => {
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
    <div className="mt-2 text-xs w-fit h-fit text-fontGray">
      {`${date} ${meridium} ${reviewHour}시 ${minute}분`}
    </div>
  );
};
export default PostDate;
