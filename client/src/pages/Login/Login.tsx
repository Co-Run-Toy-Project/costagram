/* eslint-disable */
import useGetTestLogin from '../../hooks/testUser/useGetTestLogin';
import LogoIcon from '../../assets/logoIcon.png';
import Logo from '../../assets/Logo';
import LoginBtn from '../../assets/kakao_login_medium_narrow.png';

const Login = () => {
  const { refetch } = useGetTestLogin();

  return (
    <div className="flex flex-col h-screen">
      <div className="h-screen min-w-[300px] flex justify-center items-center ">
        <div className="hidden tablet:flex tablet:h-[500px] w-[380px] bg-red-200" />
        <div className="w-[350px] h-3/6 mx-3 space-y-3 flex flex-col justify-center items-center border-2 border-gray-200">
          <img className="w-10 h-10" src={LogoIcon} alt="logo" />
          <Logo />
          <a
            href={`
            https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code
          `}
          >
            <img src={LoginBtn} alt="카카오버튼" className="cursor-pointer" />
          </a>
          <button
            type="button"
            className="h-10 font-medium text-black rounded w-[11.4rem] bg-likesGray hover:text-white"
            onClick={() => refetch()}
          >
            TEST 로그인
          </button>
        </div>
      </div>

      {/* Footer */}
      <div className="flex flex-col items-center justify-center h-20 text-xs text-fontGray">
        <div className="flex flex-wrap items-center justify-center">
          <button type="button" className="mx-2 hover:underline">
            Meta
          </button>
          <button type="button" className="mr-2 hover:underline">
            소개
          </button>
          <button type="button" className="mr-2 hover:underline">
            블로그
          </button>
          <button type="button" className="mr-2 hover:underline">
            채용정보
          </button>
          <button type="button" className="mr-2 hover:underline">
            도움말
          </button>
          <button type="button" className="mr-2 hover:underline">
            API
          </button>
          <button type="button" className="mr-2 hover:underline">
            개인정보처리지침
          </button>
          <button type="button" className="mr-2 hover:underline">
            약관
          </button>
          <button type="button" className="mr-2 hover:underline">
            인기계정
          </button>
          <button type="button" className="mr-2 hover:underline">
            위치
          </button>
          <button type="button" className="mr-2 hover:underline">
            Instagram Lite
          </button>
          <button type="button" className="mr-2 hover:underline">
            연락처 업로드 & 비사용자
          </button>
        </div>
        <p className="my-1">© 2023 Instagram from Meta</p>
      </div>
    </div>
  );
};

export default Login;
