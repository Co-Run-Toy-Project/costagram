import axios from 'axios';

type Props = {
  curPostId: number | null;
};

const getPostById = async ({ curPostId }: Props) => {
  return axios
    .get(`/post/${curPostId}`, {
      baseURL: process.env.REACT_APP_BASE_URL,
      headers: {
        withCredentials: true,
        Authorization: `${localStorage.getItem('token')}`,
        'Content-Type': `application/json`,
      },
    })
    .catch(err => console.log(err));
};

export default getPostById;
