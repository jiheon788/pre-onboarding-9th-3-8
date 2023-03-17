import { BASE_URL } from '@/constants/url';
import axios from 'axios';

const apiClient = axios.create({
  baseURL: BASE_URL,
});

export default apiClient;
