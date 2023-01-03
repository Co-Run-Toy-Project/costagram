/* eslint-disable */
import LikeComp from '../LikeComp';
import BoardContent from '../BoardContent';
import ReviewContainer from '../ReviewContainer';
import SearchComp from '../SearchComp';

const BoardContainer = () => {
  return (
    <>
      <div className="min-w-[470px] w-1/3 min-h-[600px] h-fit bg-white drop-shadow-lg p-2">
        <LikeComp />
        <BoardContent />
        <ReviewContainer />
        <SearchComp />
      </div>
    </>
  );
};

export default BoardContainer;
