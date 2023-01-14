import { atom } from 'recoil';

const permissionCode = atom<string>({
  key: 'permissionCode',
  default: '',
});

export default permissionCode;
