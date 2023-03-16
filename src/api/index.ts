import axios from 'axios';
import { BASE_URL } from '@/constants/url';

const apiClient = axios.create({
  baseURL: BASE_URL,
});

export default apiClient;
