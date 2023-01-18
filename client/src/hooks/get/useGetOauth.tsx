import { useQuery } from '@tanstack/react-query';
import getOauth from '../../apis/get/getOauth';

const useGetOauth = (permissionCode: string | null) => {
  return useQuery(['get/oauth'], () => getOauth(permissionCode), {
    enabled: false,
    onSuccess: res => {
      const ACCESS_TOKEN = res.data.accessToken;

      localStorage.setItem('token', ACCESS_TOKEN); //예시로 로컬에 저장함

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
