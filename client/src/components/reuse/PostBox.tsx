import SunnyIcon from '../../assets/SunnyIcon';
// import RainIcon from '../assets/RainIcon';
// import SnowIcon from '../assets/SnowIcon';
// import CloudyIcon from '../assets/CloudyIcon';
import PenIcon from '../../assets/PenIcon';
import DeleteIcon from '../../assets/DeleteIcon';
import useDeletePost from '../../hooks/post/useDeletePost';
import Carousel from '../Carousel';
import BoardContainer from './BoardContainer';

interface Props {
  data: {
    userName: string;
    postId: number;
  };
}

const PostBox = ({ data }: Props) => {
  const { mutate, isSuccess: deleted } = useDeletePost();

  const handleDeletePost = (postId: number) => {
    mutate({ postId });

    if (deleted) {
      console.log('deleteSuccessed!');
    }
  };

  return (
    <div className="w-full max-w-[470px] min-w-[300px] tablet:w-[470px] h-full flex flex-col border-2 border-underbarGray rounded-lg">
      {/* 게시물 헤더 */}
      <div className="h-[56px] w-full flex justify-between">
        <div className="flex">
          <img
            alt="profile"
            //프로필사진url
            src="https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80"
            className="w-10 h-10 m-2 rounded-full"
          />

          <div className="flex flex-col m-1">
            <p className="text-[16px] pl-1">{data.userName}</p>
            <div className="flex">
              <SunnyIcon />
              <p>경기도 고양시</p>
            </div>
          </div>
        </div>
        <div className="flex items-center mr-3">
          <button type="button">
            <PenIcon />
          </button>
          <button type="button" onClick={() => handleDeletePost(data.postId)}>
            <DeleteIcon />
          </button>
        </div>
      </div>
      {/* 게시물 사진 */}
      <Carousel />
      <BoardContainer />
    </div>
  );
};

export default PostBox;
