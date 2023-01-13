import SunnyIcon from '../../assets/SunnyIcon';
// import RainIcon from '../assets/RainIcon';
// import SnowIcon from '../assets/SnowIcon';
// import CloudyIcon from '../assets/CloudyIcon';
import PenIcon from '../../assets/PenIcon';
import DeleteIcon from '../../assets/DeleteIcon';
import useDeletePost from '../../hooks/post/useDeletePost';

interface Props {
  data: {
    userName: string;
    postId: number;
  };
}

const PostBox = ({ data }: Props) => {
  const { mutate, isSuccess: deleted } = useDeletePost();

  const handleDeletePost = (postId: number) => {
    mutate({ postId });

    if (deleted) {
      console.log('deleteSuccessed!');
    }
  };

  return (
    <div className="w-full max-w-[470px] min-w-[300px] tablet:w-[470px] h-full flex flex-col border-2 border-underbarGray rounded-lg">
      {/* 게시물 헤더 */}
      <div className="h-[56px] w-full flex justify-between">
        <div className="flex">
          <img
            src="https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=734&q=80"
            alt="profile"
            className="w-10 h-10 m-2 rounded-full"
          />

          <div className="flex flex-col m-1">
            <p className="text-[16px] pl-1">{data.userName}</p>
            <div className="flex">
              <SunnyIcon />
              <p>경기도 고양시</p>
            </div>
          </div>
        </div>
        <div className="flex items-center mr-3">
          <button type="button">
            <PenIcon />
          </button>
          <button type="button" onClick={() => handleDeletePost(data.postId)}>
            <DeleteIcon />
          </button>
        </div>
      </div>
      {/* 게시물 사진 */}
      <div className="h-[470px] w-full mb-3">
        <div
          id="carouselExampleCaptions"
          className="relative carousel slide"
          data-bs-ride="carousel"
        >
          <div className="absolute bottom-0 left-0 right-0 flex justify-center p-0 mb-4 carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            />
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            />
          </div>
          <div className="relative w-full overflow-hidden carousel-inner">
            <div className="relative float-left w-full carousel-item active">
              <img
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                className="block w-full"
                alt="..."
              />
              <div className="absolute hidden text-center carousel-caption md:block">
                <h5 className="text-xl">First slide label</h5>
                <p>
                  Some representative placeholder content for the first slide.
                </p>
              </div>
            </div>
            <div className="relative float-left w-full carousel-item">
              <img
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
                className="block w-full"
                alt="..."
              />
              <div className="absolute hidden text-center carousel-caption md:block">
                <h5 className="text-xl">Second slide label</h5>
                <p>
                  Some representative placeholder content for the second slide.
                </p>
              </div>
            </div>
            <div className="relative float-left w-full carousel-item">
              <img
                src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
                className="block w-full"
                alt="..."
              />
              <div className="absolute hidden text-center carousel-caption md:block">
                <h5 className="text-xl">Third slide label</h5>
                <p>
                  Some representative placeholder content for the third slide.
                </p>
              </div>
            </div>
          </div>
          <button
            className="absolute top-0 bottom-0 left-0 flex items-center justify-center p-0 text-center border-0 carousel-control-prev hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="inline-block bg-no-repeat carousel-control-prev-icon"
              aria-hidden="true"
            />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="absolute top-0 bottom-0 right-0 flex items-center justify-center p-0 text-center border-0 carousel-control-next hover:outline-none hover:no-underline focus:outline-none focus:no-underline"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="inline-block bg-no-repeat carousel-control-next-icon"
              aria-hidden="true"
            />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostBox;
