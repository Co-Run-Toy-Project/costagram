/* eslint-disable */

import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

interface FormData {
  postContent: string;
  location: string;
  weather: string;
  imagePath: any;
}

const apis = {
  postImageAndContent: async (data: FormData) => {
    // FormData 객체 생성
    const formdata = new FormData();

    // formData 추가하기
    formdata.append('postContent', data.postContent);
    formdata.append('weather', data.weather);
    formdata.append('location', data.location);

    // 객체여서 배열로 바꾸기
    const imagePathArray = Object.values(data.imagePath);

    imagePathArray.forEach((image: any) => {
      formdata.append(`imagePath`, image);
    });

    return await axios
      .post(`/post`, formdata, {
        baseURL: process.env.REACT_APP_BASE_URL,
        headers: {
          Authorization: `${localStorage.getItem('token')}`,
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
