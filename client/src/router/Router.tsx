import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Login from '../pages/Login/Login';
import MyPage from '../pages/MyPage/MyPage';
import OauthRedirectHandler from '../components/OauthRedirectHandler';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route
          path="/login/callback/kakao"
          element={<OauthRedirectHandler />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
