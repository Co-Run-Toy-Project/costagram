import { atom } from 'recoil';

const permissionCode = atom<string>({
  key: 'permissionCode',
  default: '',
});

const loginState = atom<boolean>({
  key: 'loginState',
  default: false,
});

export { permissionCode, loginState };
