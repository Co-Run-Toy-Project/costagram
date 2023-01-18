import { useQuery } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import { loginState } from '../../recoil/oauthAtom';
import getOauth from '../../apis/get/getOauth';

const useGetOauth = (permissionCode: string | null) => {
  const [login, setState] = useRecoilState(loginState);

  return useQuery(['get/oauth'], () => getOauth(permissionCode), {
    enabled: false,
    onSuccess: res => {
      const ACCESS_TOKEN = res.data.jwt;
      const USER_NAME = res.data.user.userName;
      const PROFILE_IMAGE = res.data.user.profileImage;

      localStorage.setItem('token', ACCESS_TOKEN);
      localStorage.setItem('userName', USER_NAME);
      localStorage.setItem('profileImage', PROFILE_IMAGE);

      setState(true);

      window.location.href = '/';
    },
    onError: error => {
      console.log(error);
      alert('로그인에 실패하였습니다');
      window.location.href = '/login';
    },
  });
};

export default useGetOauth;
