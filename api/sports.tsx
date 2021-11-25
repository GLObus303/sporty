import { EventDetailType, EventType } from '../model/Event';
import { axiosGet } from './base';

export const getSport = (eventId: string) =>
  axiosGet<EventDetailType>(`/sportdetail/${eventId}`);

export const getSportList = () => axiosGet<EventType[]>('/sports');
