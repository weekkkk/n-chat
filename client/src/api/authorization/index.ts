import axios from 'axios';
import { IAuthResponse } from './interfaces';

/**
 * * Ссылка на api
 */
export const API_URL = 'http://localhost:4000/authorization';

/**
 * * Объект api
 */
const $authorization = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

/**
 * * Выполняется при запросе
 */
$authorization.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
  return config;
});
/**
 * * Выполняется при ответе
 */
$authorization.interceptors.response.use(
  (config) => {
    return config;
  },
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response.status == 401 &&
      originalRequest &&
      !originalRequest._isRetry
    ) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get<IAuthResponse>(`${API_URL}/refresh`, {
          withCredentials: true,
        });
        localStorage.setItem('token', response.data.accessToken);
        return $authorization.request(originalRequest);
      } catch (e) {
        console.log('Не авторизован');
      }
    }
    throw error;
  }
);

export default $authorization;
