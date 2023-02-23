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
import BoardContainer from './BoardContainer';
import { modifyModalState } from '../../recoil/modalAtom';
import { currPostId } from '../../recoil/postAtom';
import BasicUserImage from '../../assets/BasicUserImage';
import ImageCarousel from '../ImageCarousel';

interface Comment {
  userName: string;
  commentContent: string;
  createdAt: string;
  profileImage: string;
  commentId: number;
  postId: number;
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
    location: string;
    createdAt: string;
    imagePath: Array<string>;
    likes?: [];
  };
}

const PostBox = ({ data }: Props) => {
  const [isModifyOpen, setIsModifyOpen] =
    useRecoilState<boolean>(modifyModalState);
  const [curPostId, setCurPostId] = useRecoilState<number | null>(currPostId);
  const selectedId: number = data.postId;
  const myName = localStorage.getItem('userName');

  const { mutate } = useDeletePost();

  // 날씨 아이콘 컴포넌트 리턴 함수
  const handleCheckWeather = () => {
    const weather = data.weather.toLowerCase();

    switch (true) {
      case ['sky is clear', 'sunny'].includes(weather):
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
      <div className="h-[56px] w-full flex justify-between py-8">
        <div className="flex flex-row items-center ml-2">
          {/* 프로필 사진 이미지 */}
          {data.profileImage !== '' ? (
            <img
              alt="profile"
              src={data.profileImage}
              className="w-10 h-10 m-2 rounded-full"
            />
          ) : (
            <BasicUserImage width={40} height={40} />
          )}
          <div
            className={`flex flex-col m-1 ${
              data.location ? '' : 'justify-center'
            }`}
          >
            <strong className="text-[18px] pl-x1">{data.userName}</strong>
            {data.location ? (
              <div className="flex flex-row items-center text-sm">
                {handleCheckWeather()}
                <p className="ml-1">{data.location}</p>
              </div>
            ) : null}
          </div>
        </div>

        <div className="flex items-center mr-3">
          {/* 수정 버튼 */}
          {data.userName === myName ? (
            <button type="button" onClick={handleModifyPost}>
              <PenIcon width={24} height={24} />
            </button>
          ) : null}

          {/* 삭제 버튼 */}
          {data.userName === myName ? (
            <button
              className="ml-1"
              type="button"
              onClick={() => handleDeletePost(data.postId)}
            >
              <DeleteIcon />
            </button>
          ) : null}
        </div>
      </div>
      {/* 게시물 사진 */}
      <ImageCarousel imagePath={data.imagePath} />
      <BoardContainer postData={data} />
    </div>
  );
};

export default PostBox;
