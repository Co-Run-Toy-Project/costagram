import React, { useState } from 'react';
import LeftIcon from '../assets/LeftIcon';
import RightIcon from '../assets/RightIcon';

interface ImageCarouselProps {
  imagePath: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ imagePath }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [offset, setOffset] = useState(0);
  const imageWidth = 470;
  const carouselWidth = imagePath.length * imageWidth;

  // 이전 버튼
  const handlePrevClick = () => {
    // 이전 이미지로 인덱스, offset 변경
    const newIndex = (currentIndex - 1 + imagePath.length) % imagePath.length;
    const newOffset = offset + imageWidth;
    // 이전 인덱스가 마지막 인덱스라면(첫 페이지일 때)
    if (newIndex === imagePath.length - 1) {
      setCurrentIndex(imagePath.length - 1);
      setOffset(-imageWidth * (imagePath.length - 1));
    } else {
      // 아니면 그냥 이동
      setCurrentIndex(newIndex);
      setOffset(newOffset);
    }
  };

  // 다음 버튼
  const handleNextClick = () => {
    // 다음 이미지로 인덱스, offset 변경
    const newIndex = (currentIndex + 1) % imagePath.length;
    const newOffset = offset - imageWidth;
    // 다음 인덱스가 처음이라면 (마지막 페이지일 때)
    if (newIndex === 0) {
      setCurrentIndex(0);
      setOffset(0);
    } else {
      // 아니면 그냥 이동
      setCurrentIndex(newIndex);
      setOffset(newOffset);
    }
  };

  // 이미지 슬라이딩 스타일
  const imageContainerStyle = {
    display: 'flex',
    height: '470px',
    width: `${carouselWidth}px`,
    transform: `translateX(${offset}px)`,
    transition: 'transform 0.5s ease',
  };

  return (
    <div className="relative overflow-hidden h-[470px]">
      <div className="absolute top-0 left-0 w-full">
        <div style={imageContainerStyle}>
          {imagePath.map(image => (
            <img
              key={image}
              src={image}
              alt="carousel"
              width={imageWidth}
              className="object-cover object-center"
            />
          ))}
        </div>
      </div>
      {/* 이동버튼이 이미지가 1개 이상일 경우만 보이도록 수정 */}
      {imagePath.length > 1 && (
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button
            className="bg-white/20 rounded-full p-2 focus:outline-none"
            type="button"
            onClick={handlePrevClick}
          >
            <LeftIcon />
          </button>
          <button
            className="bg-white/20 rounded-full p-2 focus:outline-none"
            type="button"
            onClick={handleNextClick}
          >
            <RightIcon />
          </button>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
