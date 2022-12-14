import { useRecoilState } from 'recoil';
import HomeIcon from '../assets/HomeIcon';
import Logo from '../assets/Logo';
import { postModalState } from '../recoil/modalAtom';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(postModalState);
  // const setModalState = useSetRecoilState(ModalState);

  const handlePostModal = () => {
    // console.log('clicked');
    // console.log(Modal);
    setIsModalOpen(!isModalOpen);
  };

  // console.log(Modal);

  return (
    <nav className="flex h-14 w-screen items-center justify-between border-b-[1px] border-b-underbarGray bg-white px-3 tablet:px-6 desktop:px-12">
      {/* logo img */}
      <Logo />

      {/* 검색 인풋 */}
      <div className="flex items-center w-40 h-8 px-2 py-1 rounded-md bg-inputGray tablet:w-72 desktop:w-80">
        {/* 돋보기 아이콘 */}
        <div className="pr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#818181"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <span className="text-fontGray">검색</span>
      </div>

      {/* 우측 아이콘들 */}
      {/* Home Button */}
      <div className="flex items-center justify-between space-x-2 tablet:space-x-5">
        <button type="button">
          <HomeIcon />
        </button>

        {/* Post Button */}
        <button
          type="button"
          onClick={() => handlePostModal()}
          className="h-6 w-6 rounded border-2 border-[#000]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#000"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M12 5.25a.75.75 0 01.75.75v5.25H18a.75.75 0 010 1.5h-5.25V18a.75.75 0 01-1.5 0v-5.25H6a.75.75 0 010-1.5h5.25V6a.75.75 0 01.75-.75z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* User Profile */}
        {/* 프로필이미지 클릭 시 마이페이지 컴포넌트로 변경 */}
        <button type="button">
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
        </button>
      </div>
      {/* <input placeholder="검색"></input> */}
    </nav>
  );
};

export default Navbar;
