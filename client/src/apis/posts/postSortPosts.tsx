import axios from 'axios';

interface Props {
  searchName: string;
}

const postSortPosts = async ({ searchName }: Props) => {
  const content = { userName: searchName };

  return axios.post(`/post/search`, content, {
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      Authorization: `${localStorage.getItem('token')}`,
      'Content-Type': `application/json`,
      withCredentials: true,
    },
  });
};

export default postSortPosts;
