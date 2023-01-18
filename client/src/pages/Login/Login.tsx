/* eslint-disable */
import LogoIcon from '../../assets/logoIcon.png';
import Logo from '../../assets/Logo';
import LoginBtn from '../../assets/kakao_login_medium_narrow.png';

const Login = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="h-screen min-w-[300px] flex justify-center items-center ">
        <div className="hidden tablet:flex tablet:h-[500px] w-[380px] bg-red-200" />
        <div className="w-[350px] h-3/6 mx-3 flex flex-col justify-center items-center border-2 border-gray-200">
          <img className="w-10 h-10 mb-3" src={LogoIcon} alt="logo" />
          <Logo />
          <a
            href={`
            https://kauth.kakao.com/oauth/authorize?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&response_type=code
          `}
          >
            <img
              src={LoginBtn}
              alt="카카오버튼"
              className="mt-5 cursor-pointer"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-col  justify-center items-center h-20 text-xs text-fontGray">
        <div className="flex flex-wrap justify-center items-center">
          <button type="button" className="hover:underline mx-2">
            Meta
          </button>
          <button type="button" className="hover:underline mr-2">
            소개
          </button>
          <button type="button" className="hover:underline mr-2">
            블로그
          </button>
          <button type="button" className="hover:underline mr-2">
            채용정보
          </button>
          <button type="button" className="hover:underline mr-2">
            도움말
          </button>
          <button type="button" className="hover:underline mr-2">
            API
          </button>
          <button type="button" className="hover:underline mr-2">
            개인정보처리지침
          </button>
          <button type="button" className="hover:underline mr-2">
            약관
          </button>
          <button type="button" className="hover:underline mr-2">
            인기계정
          </button>
          <button type="button" className="hover:underline mr-2">
            위치
          </button>
          <button type="button" className="hover:underline mr-2">
            Instagram Lite
          </button>
          <button type="button" className="hover:underline mr-2">
            연락처 업로드 & 비사용자
          </button>
        </div>
        <p className="my-1">© 2023 Instagram from Meta</p>
      </div>
    </div>
  );
};

export default Login;
