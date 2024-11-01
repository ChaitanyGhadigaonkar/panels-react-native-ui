import axios from 'axios';
import Config from 'react-native-config';

const AxiosUnsplashInstance = axios.create({
  baseURL: `https://api.unsplash.com/`,
  headers: {
    Authorization: `Client-ID ${Config.UNSPLASH_ACCESS_KEY}`,
    'Accept-Version': 'v1',
  },
});

export {AxiosUnsplashInstance};
