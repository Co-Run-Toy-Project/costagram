import { useEffect, useRef, useState } from 'react';
import { useRecoilValue, useRecoilState } from 'recoil';
import {
  postModalState,
  clickBackState,
  postArticle,
  Form,
} from '../recoil/modalAtom';

import UploadPhotoIcon from '../assets/UploadPhotoIcon';
import CancelModal from './reuse/CancelModal';
import ModalButton from './reuse/ModalButton';
import useGetWeather from '../hooks/weather/useGetWeather';
import BackwardIcon from '../assets/BackwardIcon';

import MakeMap from './MakeMap';
import useCreatePost from '../hooks/post/useCreatePost';

import PostCarousel from './PostCarousel';

const PostModal = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState<boolean>(postModalState);
  const [isClicked, setIsClicked] = useRecoilState<boolean>(clickBackState);
  const [post, setPost] = useRecoilState(postArticle);

  const { lat, lon, weather, location, content } = useRecoilValue(postArticle);

  const [picture, setPicture] = useState<any>([]);
  // const [sendPic, setSendPic] = useState<any>([]);
  const [files, setFiles] = useState<FileList | undefined>();

  const [communityImage, setCommunityImage] = useState<
    string | ArrayBuffer | null
  >(null);

  const { mutate } = useCreatePost();

  // 날씨 타입
  const weatherType = useRef(null);

  const {
    data: weatherData,
    refetch: weatherRefetch,
    isSuccess: gotWeatherData,
  } = useGetWeather(lat, lon);

  const todayWeather = weatherData?.data.weather[0].main;

  // useEffect(() => {
  //   weatherRefetch();
  // }, []);

  // 현재 날씨 요청 함수
  const handleWeather = () => {
    weatherRefetch();

    if (gotWeatherData) {
      weatherType.current = todayWeather;
      setPost({ ...post, weather: weatherType.current });
    }
  };

  const handleBackPost = () => {
    setIsClicked(!isClicked);
  };

  const addImage = (e: any) => {
    const nowSelect = e.target.files;
    const nowPictures = [...picture];

    for (let i = 0; i < nowSelect.length; i += 1) {
      const nowPicUrl = URL.createObjectURL(nowSelect[i]);
      nowPictures.push(nowPicUrl);
    }
    setPicture(nowPictures);
  };

  const onChangeImg = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const fileList = e.target.files;
    if (fileList !== null) {
      setFiles(fileList);
    }

    if (e.target.files) {
      const uploadFile = e.target.files[0];

      const reader = new FileReader();
      reader.readAsDataURL(uploadFile);

      reader.onload = () => {
        setCommunityImage(reader.result);
      };
    }

    addImage(e);
  };

  const Posting = () => {
    if (picture.length > 0 && content.length > 0) {
      handleWeather();

      if (files !== undefined) {
        // const arrFile = Array.from(files);
        mutate({
          postContent: content,
          weather: weather!,
          location: location!,
          imagePath: files,
        });
      }
    }
  };

  return (
    <div
      className={`${
        isModalOpen ? 'flex' : 'hidden'
      } fixed top-0 left-0 z-50 h-full w-full items-center justify-center bg-[rgba(0,0,0,0.6)]`}
    >
      <CancelModal />
      <form className="top-1/4 flex h-[60%] w-[70%] flex-col bg-white tablet:flex-row tablet:min-w-mobile">
        {/* 이미지 첨부 부분 */}
        <div className="p-2 h-1/2 bg-likesGray tablet:h-full tablet:w-1/2 tablet:p-4">
          {/* 뒤로가기(취소) 버튼 */}
          <BackwardIcon onClick={handleBackPost} />

          <div className="mt-[-2rem] flex h-full w-full flex-row items-center justify-center">
            {picture.length !== 0 ? (
              <div className="flex flex-col w-4/6 h-3/5">
                <PostCarousel CarouselData={[...picture]} />
                <div>
                  <input
                    className="hidden"
                    id="file"
                    type="file"
                    multiple
                    accept="image/*"
                    onChange={onChangeImg}
                  />
                  <label
                    htmlFor="file"
                    className="flex flex-col items-center pt-2 cursor-pointer text-inputFontGray"
                  >
                    이미지 교체하기
                  </label>
                </div>
              </div>
            ) : (
              <div>
                <input
                  className="hidden"
                  id="file"
                  type="file"
                  accept="image/*"
                  onChange={onChangeImg}
                  multiple
                />
                <label
                  htmlFor="file"
                  className="flex flex-col items-center pt-2 cursor-pointer text-inputFontGray"
                >
                  <UploadPhotoIcon />
                  클릭하여 이미지 첨부
                </label>
              </div>
            )}
          </div>
        </div>

        {/* 게시글 작성 부분 */}
        <div className="flex flex-col p-3 space-y-3 h-1/2 tablet:h-full tablet:w-1/2">
          {/* simple user info */}
          <div className="flex flex-row items-center">
            {/* user profile 임시icon 지정 */}
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#818181"
                className="w-8 h-8"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>

            <span className="pl-2 font-">yw1010</span>
          </div>

          <div className="h-1/3">
            <textarea
              placeholder="  내용을 입력하세요"
              maxLength={2000}
              className="w-full outline-none resize-none"
              onChange={e => setPost({ ...post, content: e.target.value })}
            />
          </div>

          {/* map api 위치 */}
          <div className="h-1/2 bg-inputGray">
            <MakeMap />
          </div>
          <div>{location}</div>
          <ModalButton onClick={Posting}>저장</ModalButton>
        </div>
      </form>
    </div>
  );
};

export default PostModal;
