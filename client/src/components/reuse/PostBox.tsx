import { useRecoilState } from 'recoil';
import {
  CloudyIcon,
  SunnyIcon,
  RainIcon,
  SnowIcon,
} from '../../assets/WeatherIcon';
import PenIcon from '../../assets/PenIcon';
import DeleteIcon from '../../assets/DeleteIcon';
import useDeletePost from '../../hooks/posts/useDeletePost';
import Carousel from '../Carousel';
import BoardContainer from './BoardContainer';
import { modifyModalState } from '../../recoil/modalAtom';
import currPostId from '../../recoil/postAtom';

interface Comment {
  userName: string;
  commentContent: string;
  createdAt: string;
  profileImage: string;
}

interface Props {
  data: {
    userName: string;
    postId: number;
    postContent: string;
    comments: Array<Comment>;
    commentCount: number;
    weather: string;
    profileImage: string;
  };
}

const PostBox = ({ data }: Props) => {
  const [isModifyOpen, setIsModifyOpen] =
    useRecoilState<boolean>(modifyModalState);
  const [curPostId, setCurPostId] = useRecoilState<number | null>(currPostId);
  const selectedId: number = data.postId;

  const { mutate } = useDeletePost();

  // 날씨 아이콘 컴포넌트 리턴 함수
  const handleCheckWeather = () => {
    const weather = data.weather.toLowerCase();

    switch (true) {
      case ['sky is clear'].includes(weather):
        return <SunnyIcon />;
      case [
        'few clouds',
        'scattered clouds',
        'broken clouds',
        'overcast clouds',
      ].includes(weather):
        return <CloudyIcon />;
      case [
        'rain',
        'light rain',
        'shower rain',
        'moderate rain',
        'thunderstorm',
        'mist',
      ].includes(weather):
        return <RainIcon />;
      case ['snow'].includes(weather):
        return <SnowIcon />;
      default:
        return '';
    }
  };

  const handleModifyPost = () => {
    setIsModifyOpen(!isModifyOpen);
    setCurPostId(selectedId);
  };

  const handleDeletePost = (postId: number) => {
    return mutate({ postId });
  };

  return (
    <div className="w-full max-w-[470px] min-w-[300px] tablet:w-[470px] h-full flex flex-col border-2 border-underbarGray rounded-lg">
      {/* 게시물 헤더 */}
      <div className="h-[56px] w-full flex justify-between">
        <div className="flex">
          {/* 프로필 사진 이미지 */}
          <img
            alt="profile"
            src={data.profileImage}
            className="w-10 h-10 m-2 rounded-full"
          />

          <div className="flex flex-col m-1">
            <p className="text-[16px] pl-1">{data.userName}</p>
            <div className="flex">
              {handleCheckWeather()}
              <p>경기도 고양시</p>
            </div>
          </div>
        </div>
        <div className="flex items-center mr-3">
          {/* 수정 버튼 */}
          <button type="button" onClick={handleModifyPost}>
            <PenIcon />
          </button>

          {/* 삭제 버튼 */}
          <button type="button" onClick={() => handleDeletePost(data.postId)}>
            <DeleteIcon />
          </button>
        </div>
      </div>
      {/* 게시물 사진 */}
      <Carousel />
      <BoardContainer postData={data} />
    </div>
  );
};

export default PostBox;
