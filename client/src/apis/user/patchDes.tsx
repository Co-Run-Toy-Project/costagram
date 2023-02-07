import axios from 'axios';

interface Props {
  introduce: string;
}

const patchDes = async ({ introduce }: Props) => {
  const content = {
    introduce,
  };
  return axios.patch(`user`, content, {
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      withCredentials: true,
      Authorization: `${localStorage.getItem('token')}`,
      'Content-Type': `application/json`,
    },
  });
};
export default patchDes;
