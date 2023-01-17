import axios from 'axios';

type Props = {
  selectedId: number | null;
};

const getPostById = async ({ selectedId }: Props) => {
  return axios
    .get(`/post/${selectedId}`, {
      baseURL: process.env.REACT_APP_BASE_URL,
      headers: {
        withCredentials: true,
        // Authorization: `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': `application/json`,
      },
    })
    .catch(err => console.log(err));
};

export default getPostById;
