/* eslint-disable */

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import postPost from '../../apis/post/postPost';

interface FormData {
  postContent: string;
  location: string;
  weather: string;
  imagePath: any;
}

const apis = {
  postImageAndContent: async (data: FormData) => {
    const formdata = new FormData();
    formdata.append('postContent', data.postContent!);
    formdata.append('imagePath', data.imagePath!);
    formdata.append('weather', data.weather);
    formdata.append('location', data.location);

    return await axios
      .post(`/post`, {
        baseURL: process.env.REACT_APP_BASE_URL,
        timeout: 5000,
        headers: {
          withCredentials: true,
          Authorization: `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'multipart/form-data',
        },
      })
      .catch(err => console.log(err));
  },
};

const useCreatePost = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation(
    ['post/post'],
    (formdata: FormData) => apis.postImageAndContent(formdata),
    {
      onSuccess: () => queryClient.invalidateQueries(['get/post']),
    },
  );

  return { mutate };
};

export default useCreatePost;
