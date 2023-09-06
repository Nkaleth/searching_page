import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://torre.ai/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;
