import {atom} from 'recoil';

export const LoginState = atom({
  key: 'loginStatus',
  default: false,
});
