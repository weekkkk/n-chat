import $api from '@/http';
import { IMessage } from '@/models/IMessage';
import { AxiosResponse } from 'axios';

export default class MessageService {
  static getMessages(dialog?: string): Promise<AxiosResponse<IMessage[]>> {
    return $api.get<IMessage[]>('/messages', { params: { dialog } });
  }
}
