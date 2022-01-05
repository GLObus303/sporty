import { ActivityTypeType, EventType } from '../model/Event';
import { axiosGet } from './base';

export const getEventList = () => axiosGet<EventType[]>(`/event/`);

export const getEvent = (eventId: string) =>
  axiosGet<EventType>(`/event/${eventId}`);

export const getActivityTypeType = () =>
  axiosGet<ActivityTypeType[]>('/ActivityTypeType');
