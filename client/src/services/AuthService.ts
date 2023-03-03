import $api from '@/http';
import { AuthResponse } from '@/models/response/AuthResponse';
import { AxiosResponse } from 'axios';

export default class AuthService {
  static login(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/login', { email, password });
  }

  static registration(
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> {
    return $api.post<AuthResponse>('/registration', { email, password });
  }

  static cancelRegistration(userId: string): Promise<AxiosResponse<void>> {
    return $api.post('/cancelRegistration', { userId });
  }

  static logout(): Promise<void> {
    return $api.post('/logout');
  }
}
