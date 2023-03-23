/* eslint-disable */
import LikeComp from '../LikeComp';
import BoardContent from '../BoardContent';
import ReviewContainer from '../ReviewContainer';
import SearchComp from '../SearchComp';
import PostDate from './PostDate';

interface Comment {
  userName: string;
  commentContent: string;
  createdAt: string;
  profileImage: string;
  commentId: number;
  postId: number;
}

interface Props {
  postData: {
    userName: string;
    postContent: string;
    comments: Array<Comment>;
    commentCount: number;
    postId: number;
    createdAt: string;
    likes?: string[];
  };
}

const BoardContainer = ({ postData }: Props) => {
  const aboutPost = {
    userName: postData.userName,
    postContent: postData.postContent,
  };

  const aboutReview = {
    reviewUserName: postData.userName,
    reviewData: postData.comments,
    reviewCount: postData.commentCount,
  };

  return (
    <div className="w-full p-3 bg-white h-fit drop-shadow-lg">
      <LikeComp
        postId={postData.postId}
        likes={postData.likes?.length}
        likeLi={postData.likes}
      />
      <BoardContent postData={aboutPost} />
      <ReviewContainer aboutReview={aboutReview} />
      {/* 게시글 날짜 */}
      <PostDate createdAt={postData.createdAt} />
      <SearchComp postId={postData.postId} />
    </div>
  );
};

export default BoardContainer;
