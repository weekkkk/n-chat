import axios from 'axios';

/**
 * * Ссылка на api
 */
export const API_URL = 'http://localhost:4000/message';

/**
 * * Объект api
 */
const $message = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

export default $message;
