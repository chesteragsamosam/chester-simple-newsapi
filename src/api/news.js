import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://newsapi.org/v2'
});
  

instance.defaults.headers.common['X-Api-Key'] = import.meta.env.VITE_NEWSAPI_API_KEY || '233f3c3730634f538fc721a3d76fdd1f';

export default instance;