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
