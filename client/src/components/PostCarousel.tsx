/* eslint-disable */
const PostCarousel = (CarouselData: any) => {
  const Data = CarouselData.CarouselData;

  return (
    <div>
      <div className="carousel ">
        {Data !== undefined
          ? Data.map((slide: any, index: number) => {
              return (
                <div
                  id={`slide${index}`}
                  className="relative w-full h-[270px] carousel-item"
                  key={index}
                >
                  <img
                    alt="carousel-img"
                    src={slide}
                    className="object-contain w-full h-full"
                  />
                  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a
                      href={`#slide${index - 1}`}
                      className={` ${'w-50 btn-circle inline-flex shrink-0 cursor-pointer select-none flex-wrap	items-center justify-center border-transparent text-center transition-colors	bg-white/20'}`}
                    >
                      ❮
                    </a>
                    <a
                      href={`#slide${index + 1}`}
                      className={` ${'btn-circle inline-flex shrink-0 cursor-pointer select-none flex-wrap	items-center justify-center border-transparent text-center transition-colors	bg-white/20'}`}
                    >
                      ❯
                    </a>
                  </div>
                </div>
              );
            })
          : null}
      </div>
    </div>
  );
};

export default PostCarousel;
