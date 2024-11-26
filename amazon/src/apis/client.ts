import axios from 'axios';

import { BASE_URL } from '@constants';

export const client = axios.create({
  baseURL: BASE_URL,
});

client.interceptors.request.use(
  (config) => {
    const userId = localStorage.getItem('userId');
    if (userId) {
      config.headers['memberId'] = Number(userId);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
