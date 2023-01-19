import { atom } from 'recoil';

const currPostId = atom<number | null>({
  key: 'currPostId',
  default: null,
});

export default currPostId;
