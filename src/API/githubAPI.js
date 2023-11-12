// MODULE
import axios from 'axios';
// HOOK
import {GITHUB_DEV_KEY} from '@env';

const userName = 'kkt9102';
const uri = 'https://api.github.com';
const accessToken = GITHUB_DEV_KEY;

export const getMyRepositories = async () => {
  return new Promise((resolve, reject) => {
    axios
      .get(`${uri}/user/repos`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then(res => {
        resolve(res);
        console.log(res);
      })
      .catch(err => {
        reject(err);
      });
  });
};
