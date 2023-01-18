import { atom } from 'recoil';

export const postModalState = atom<boolean>({
  key: 'postModalState',
  default: false,
});

export const modifyModalState = atom<boolean>({
  key: 'modifyModalState',
  default: false,
});

export const clickBackState = atom<boolean>({
  key: 'clickBackState',
  default: false,
});

export interface Article {
  content: string;
  lat: number;
  lon: number;
  picture: any;
  weather: string | null;
  // eslint-disable-next-line no-restricted-globals
  location: string | null;
}

export const postArticle = atom<Article>({
  key: 'article',
  default: {
    content: '',
    lat: 33.450701,
    lon: 126.570667,
    picture: '',
    weather: 'sunny',
    // eslint-disable-next-line no-restricted-globals
    location: null,
  },
});

export interface Form {
  postContent: string;
  imagePath: any;
  // eslint-disable-next-line no-restricted-globals
  location: string;
  weather: string;
}
