/* eslint-disable */
import LikeComp from '../LikeComp';
import BoardContent from '../BoardContent';
import ReviewContainer from '../ReviewContainer';
import SearchComp from '../SearchComp';
import PostDate from './PostDate';

interface Comment {
  // userName: string;
  commentContent: string;
  createdAt: string;
}

interface Props {
  postData: {
    userName: string;
    postContent: string;
    comments: Array<Comment>;
    commentCount: number;
  };
}

const BoardContainer = ({ postData }: Props) => {
  // console.log(postData);
  const aboutPost = {
    userName: postData.userName,
    postContent: postData.postContent,
  };

  const aboutReview = {
    reviewData: postData.comments,
    reviewCount: postData.commentCount,
  };

  return (
    <div className="w-full p-2 bg-white h-fit drop-shadow-lg">
      <LikeComp />
      <BoardContent postData={aboutPost} />
      <ReviewContainer aboutReview={aboutReview} />
      {/* 게시글 날짜 */}
      <PostDate />
      <SearchComp />
    </div>
  );
};

export default BoardContainer;
