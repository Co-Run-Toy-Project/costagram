import React, { useState } from 'react';

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
          {imagePath.map((image, index) => (
            <img
              key={index}
              src={image}
              alt="carousel"
              width={imageWidth}
              className="mr-4"
            />
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-black text-white rounded-r-md"
        onClick={handlePrevClick}
        type="button"
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-black text-white rounded-l-md"
        onClick={handleNextClick}
        type="button"
      >
        Next
      </button>
    </div>
  );
};

export default ImageCarousel;
