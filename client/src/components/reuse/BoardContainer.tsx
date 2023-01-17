/* eslint-disable */
import LikeComp from '../LikeComp';
import BoardContent from '../BoardContent';
import ReviewContainer from '../ReviewContainer';
import SearchComp from '../SearchComp';

interface Props {
  postData: {
    userId: number;
    postContent: string;
  };
}

const BoardContainer = ({ postData }: Props) => {
  return (
    <div className="w-full p-2 bg-white h-fit drop-shadow-lg">
      <LikeComp />
      <BoardContent postData={postData} />
      <ReviewContainer />
      <SearchComp />
    </div>
  );
};

export default BoardContainer;
