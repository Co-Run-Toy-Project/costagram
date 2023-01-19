import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import HomeIcon from '../assets/HomeIcon';
import Logo from '../assets/Logo';
import { postModalState } from '../recoil/modalAtom';
import { loginState } from '../recoil/oauthAtom';

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useRecoilState(postModalState);

  const handlePostModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleClickLogout = () => {
    const res = window.confirm('정말로 로그아웃하시겠습니까?');
    if (res) {
      localStorage.removeItem('token');
      localStorage.removeItem('userName');
      localStorage.removeItem('profileImage');

      window.location.reload();
    }
  };

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
          onClick={handlePostModal}
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
        {localStorage.getItem('token') ? (
          <div className="w-fit h-fit flex flex-row justify-center items-center">
            <Link to="/mypage">
              <button type="button" className="w-7 h-7 rounded-full mt-1">
                <img
                  src={`${localStorage.getItem('profileImage')}`}
                  alt="프로필사진"
                  className="w-full h-full rounded-full"
                />
              </button>
            </Link>
            <button
              type="button"
              className="w-20 h-9 rounded-md bg-likesRed text-sm text-white ml-5"
              onClick={handleClickLogout}
            >
              로그아웃
            </button>
          </div>
        ) : (
          <Link to="/login">
            <button
              type="button"
              className="w-20 h-9 rounded-md bg-postDeepBlue text-sm text-white"
            >
              로그인
            </button>
          </Link>
        )}
      </div>
      {/* <input placeholder="검색"></input> */}
    </nav>
  );
};

export default Navbar;
