import axios from 'axios';

const getUser = async () => {
  return axios
    .get(`/user`, {
      baseURL: process.env.REACT_APP_BASE_URL,
      headers: {
        withCredentials: true,
        'Content-Type': `application/json`,
        Authorization: `${localStorage.getItem('token')}`,
      },
    })
    .catch(err => console.log(err));
};

export default getUser;
