import axios from 'axios';

const getOauth = async (permissionCode: string | null) => {
  return axios.get(`/oauth/kakao/callback?code=${permissionCode}`, {
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      withCredentials: true,
      'Content-Type': `application/json`,
    },
  });
};

export default getOauth;
