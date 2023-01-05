import LogoIcon from '../../assets/logoIcon.png';
// import kakaoLogo from '../../assets/kakaoLogo.png';
import Logo from '../../assets/Logo';

const Login = () => {
  return (
    <div className="h-screen flex flex-col">
      <div className="h-screen min-w-[300px] flex justify-center items-center ">
        <div className="hidden tablet:flex tablet:h-[500px] w-[380px] bg-red-200"></div>
        <div className="w-[350px] h-3/6 mx-3 flex flex-col justify-center items-center border-2 border-gray-200">
          <img className="w-10 h-10 mb-3" src={LogoIcon}></img>
          <Logo />
          {/* <div className="w-10 h-10 bg-kakaoLogo"> </div> */}
          <button className="w-5/6 h-11 mt-3 rounded-lg bg-amber-300 flex justify-center items-center">
            카카오로그인
          </button>
        </div>
      </div>
      <div className="flex flex-col  justify-center items-center h-20 text-xs text-fontGray">
        <div className="flex flex-wrap justify-center items-center">
          <button className="hover:underline mx-2">Meta</button>
          <button className="hover:underline mr-2">소개</button>
          <button className="hover:underline mr-2">블로그</button>
          <button className="hover:underline mr-2">채용정보</button>
          <button className="hover:underline mr-2">도움말</button>
          <button className="hover:underline mr-2">API</button>
          <button className="hover:underline mr-2">개인정보처리지침</button>
          <button className="hover:underline mr-2">약관</button>
          <button className="hover:underline mr-2">인기계정</button>
          <button className="hover:underline mr-2">위치</button>
          <button className="hover:underline mr-2">Instagram Lite</button>
          <button className="hover:underline mr-2">
            연락처 업로드 & 비사용자
          </button>
        </div>
        <p className="my-1">© 2023 Instagram from Meta</p>
      </div>
    </div>
  );
};

export default Login;
