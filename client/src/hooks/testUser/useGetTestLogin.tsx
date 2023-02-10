import { useQuery } from '@tanstack/react-query';
import getTestLogin from '../../apis/testUser/getTestLogin';

interface response {
  data: {
    user: {
      userName: string;
      profileImage: string;
    };
    jwt: string;
  };
}

const useGetTestLogin = () => {
  return useQuery(['get/testUser'], () => getTestLogin(), {
    enabled: false,
    onSuccess: (res: response) => {
      const ACCESS_TOKEN = res.data.jwt;
      const USER_NAME = res.data.user.userName;
      const PROFILE_IMAGE = res.data.user.profileImage;

      localStorage.setItem('token', ACCESS_TOKEN);
      localStorage.setItem('userName', USER_NAME);
      localStorage.setItem('profileImage', PROFILE_IMAGE);

      window.location.href = '/';
    },
    onError: error => {
      console.log(error);
      alert('로그인에 실패하였습니다');
      window.location.href = '/login';
    },
  });
};

export default useGetTestLogin;
