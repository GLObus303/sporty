import { EventType, Event } from '../model/Event';
import { axiosGet, axiosPost } from './base';

export const getEventList = () => axiosGet<Event>(`/event/`);

export const getEvent = (eventId: string) =>
  axiosGet<Event>(`/event/${eventId}`);

export const getEventType = () => axiosGet<EventType[]>('/eventType');

export const createEvent = (body) => axiosPost<Event>('/newevent', body);
