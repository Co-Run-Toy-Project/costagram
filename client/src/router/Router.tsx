import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/Main/Main';
import Login from '../pages/Login/Login';
import MyPage from '../pages/MyPage/MyPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/login" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
