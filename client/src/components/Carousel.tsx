const CarouselData = [
  {
    id: 1,
    image:
      'https://images.unsplash.com/photo-1546768292-fb12f6c92568?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 2,
    image:
      'https://images.unsplash.com/photo-1501446529957-6226bd447c46?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1489&q=80',
  },
  {
    id: 3,
    image:
      'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 4,
    image:
      'https://images.unsplash.com/photo-1475189778702-5ec9941484ae?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80',
  },
  {
    id: 5,
    image:
      'https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
  },
];

const Carousel = () => {
  return (
    <div>
      {/* 이미지 배열이 하나일 경우 버튼 보이지 않게 하는 삼항연산자 */}
      {CarouselData.length === 1 ? (
        <div className="carousel h-[470px] w-full">
          <div className="carousel-item relative w-full">
            <img
              alt="carousel-img"
              src={CarouselData[0].image}
              className="w-full object-cover"
            />
          </div>
        </div>
      ) : (
        <div className="carousel h-[470px] w-full ">
          {CarouselData.map((slide, index) => {
            return (
              <div
                key={slide.id}
                id={`slide${index}`}
                className="carousel-item relative w-full"
              >
                <img
                  alt="carousel-img"
                  src={slide.image}
                  className="w-full object-cover"
                />

                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                  <a
                    key={slide.id}
                    href={`#slide${index - 1}`}
                    className={` ${
                      // 첫 번째 이미지 일 경우 좌측으로 가는 버튼 만 보이지 않게
                      index <= 0
                        ? 'opacity-0'
                        : 'btn-circle inline-flex shrink-0 cursor-pointer select-none flex-wrap	items-center justify-center border-transparent text-center transition-colors	bg-white/20'
                    }`}
                  >
                    ❮
                  </a>
                  <a
                    href={`#slide${index + 1}`}
                    className={` ${
                      index === slide.image.length - 1
                        ? 'opacity-0'
                        : 'btn-circle inline-flex shrink-0 cursor-pointer select-none flex-wrap	items-center justify-center border-transparent text-center transition-colors	bg-white/20'
                    }`}
                  >
                    ❯
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Carousel;
