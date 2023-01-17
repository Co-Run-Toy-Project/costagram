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
  picture: string;
  weather: string;
}

export const postArticle = atom<Article>({
  key: 'article',
  default: {
    content: '',
    lat: 33.450701,
    lon: 126.570667,
    picture: '0,',
    weather: 'sunny',
  },
});
