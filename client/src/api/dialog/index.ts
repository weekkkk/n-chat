import axios from 'axios';

/**
 * * Ссылка на api
 */
export const API_URL = 'http://localhost:4000/dialog';

/**
 * * Объект api
 */
const $dialog = axios.create({
  withCredentials: true,
  baseURL: API_URL,
});

export default $dialog;
