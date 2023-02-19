import React, { useState } from 'react';
import LeftIcon from '../assets/LeftIcon';
import RightIcon from '../assets/RightIcon';

interface ImageCarouselProps {
  imagePath: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ imagePath }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const prevIndex = (currentIndex - 1 + imagePath.length) % imagePath.length;
    setCurrentIndex(prevIndex);
  };

  const handleNextClick = () => {
    const nextIndex = (currentIndex + 1) % imagePath.length;
    setCurrentIndex(nextIndex);
  };

  const imageWidth = 470; // change this value to adjust the width of each image
  const carouselWidth = imagePath.length * imageWidth;
  const offset = -currentIndex * imageWidth;

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
      {/* 이미지가 1개 이상일 경우만 보이도록 수정 */}
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
