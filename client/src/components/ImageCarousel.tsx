import React, { useState } from 'react';
import LeftIcon from '../assets/LeftIcon';
import RightIcon from '../assets/RightIcon';

interface ImageCarouselProps {
  imagePath: string[];
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ imagePath }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((currentIndex - 1 + imagePath.length) % imagePath.length);
  };

  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % imagePath.length);
  };

  const imageWidth = 470; // change this value to adjust the width of each image
  const carouselWidth = imagePath.length * imageWidth;
  const offset = -currentIndex * imageWidth;

  return (
    <div className="relative overflow-hidden h-[470px]">
      <div className="absolute top-0 left-0 w-full">
        <div
          className="flex"
          style={{ width: carouselWidth, transform: `translateX(${offset}px)` }}
        >
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
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <button
          className="btn-circle inline-flex shrink-0 cursor-pointer select-none flex-wrap	items-center justify-center border-transparent text-center transition-colors	bg-white/20"
          type="button"
          onClick={handlePrevClick}
        >
          <LeftIcon />
        </button>
        <button
          className="btn-circle inline-flex shrink-0 cursor-pointer select-none flex-wrap	items-center justify-center border-transparent text-center transition-colors	bg-white/20"
          type="button"
          onClick={handleNextClick}
        >
          <RightIcon />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
