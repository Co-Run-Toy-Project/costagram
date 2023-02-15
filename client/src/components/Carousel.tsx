interface Props {
  data: {
    imagePath: Array<string>;
    postId: number;
  };
}

const Carousel = ({ data }: Props) => {
  const imageArr = data.imagePath;
  return (
    <div>
      {/* 이미지 배열이 하나일 경우 버튼 보이지 않게 하는 삼항연산자 */}
      {/* 이미지 없을 경우 조건 추가 */}
      {imageArr.length === 1 && imageArr[0] ? (
        <div className="carousel h-[470px] w-full">
          <div className="carousel-item relative w-full">이미지가없습니다</div>
        </div>
      ) : (
        <div>
          {imageArr.length === 1 && imageArr[1] ? (
            <div className="carousel h-[470px] w-full">
              <div className="carousel-item relative w-full">
                <img
                  alt="carousel-img"
                  src={imageArr[0]}
                  className="w-full object-cover"
                />
              </div>
            </div>
          ) : (
            <div className="carousel h-[470px] w-full ">
              {imageArr.map((slide, index) => {
                return (
                  <div
                    key={slide}
                    id={`slide${index}`}
                    className="carousel-item relative w-full"
                  >
                    <img
                      alt="carousel-img"
                      src={slide}
                      className="w-full object-cover"
                    />

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                      <a
                        key={slide}
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
                          index === slide.length - 1
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
      )}
    </div>
  );
};

export default Carousel;
