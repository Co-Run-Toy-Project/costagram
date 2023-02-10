import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import AddIcon from '../assets/AddIcon';
import HomeIcon from '../assets/HomeIcon';
import Logo from '../assets/Logo';
import MagnifyIcon from '../assets/MagnifyIcon';
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
      <Link to="/">
        <Logo />
      </Link>

      {/* 검색 인풋 */}
      <form>
        <label htmlFor="searchBox" className="hidden">
          검색
        </label>
        <div className="flex items-center w-40 h-8 px-2 py-1 rounded-md bg-inputGray tablet:w-72 desktop:w-80">
          {/* 돋보기 아이콘 */}
          <MagnifyIcon />
          <input
            id="searchBox"
            placeholder="검색"
            className="pl-1 ml-2 outline-none bg-inputGray"
          />
        </div>
      </form>

      {/* 우측 아이콘들 */}
      {/* Home Button */}
      <div className="flex items-center justify-between space-x-2 tablet:space-x-5">
        <Link to="/">
          <HomeIcon />
        </Link>

        {/* Post Button */}
        <button
          type="button"
          onClick={handlePostModal}
          className="h-6 w-6 rounded border-2 border-[#000]"
        >
          <AddIcon />
        </button>

        {/* User Profile */}
        {/* 로그인 여부에 따라 마이페이지 다르게 보이도록 */}
        {localStorage.getItem('token') ? (
          <div className="flex flex-row items-center justify-center w-fit h-fit">
            <Link to="/mypage" className="w-8 h-8 mt-1 rounded-full">
              <img
                src={`${localStorage.getItem('profileImage')}`}
                alt="프로필사진"
                className="w-full h-full rounded-full"
              />
            </Link>
            <button
              type="button"
              className="w-20 ml-5 text-sm text-white rounded-md h-9 bg-likesRed"
              onClick={handleClickLogout}
            >
              로그아웃
            </button>
          </div>
        ) : (
          <Link
            to="/login"
            className="flex items-center justify-center w-20 text-sm font-medium text-white rounded-md h-9 bg-postDeepBlue"
          >
            로그인
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
