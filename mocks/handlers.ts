import { rest } from 'msw';

import { EventDetailType, EventType } from '../model/Event';

const eventDetail: Record<string, EventDetailType> = {
  '60333292-7ca1-4361-bf38-b6b43b90cb16': {
    location: 'U průhonu 7a',
    date: '22.12.2021',
    time: '15:00',
    activity: 'Odpolední výlet na Vítkov',
    capacity: 100,
    price: 'Zdarma',
    eventName: 'Name of the event',
    text: 'Lord of The Rings, is with no absolute hesitation, my most favored and adored book by‑far. The triology is wonderful‑ and I really consider this a legendary fantasy series. It will always keep you at the edge of your seat‑ and the characters you will grow and fall in love with!',
  },
};

const eventList: EventType[] = [
  {
    id: '60333292-7ca1-4361-bf38-b6b43b90cb16',
    title: 'Fotbal',
    description:
      'Fotbal Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales posuere felis non efficitur. Mauris mollis elit urna, id tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales posuere felis non efficitur. Mauris mollis elit urna, id tempus.',
  },
  {
    id: 'fa4dfd69122541a11c8d6ffc481140af',
    title: 'Tenis',
    description:
      'Tenis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales posuere felis non efficitur. Mauris mollis elit urna, id tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales posuere felis non efficitur. Mauris mollis elit urna, id tempus.',
  },
  {
    id: '7ab847be4b7ad8546f0bb9180da7c6ac',
    title: 'Bowling',
    description:
      'Bowling Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales posuere felis non efficitur. Mauris mollis elit urna, id tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales posuere felis non efficitur. Mauris mollis elit urna, id tempus.',
  },
  {
    id: '12a80e5b6da10c68ffbab55789198202',
    title: 'PingPong',
    description:
      'Ping Pong Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales posuere felis non efficitur. Mauris mollis elit urna, id tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales posuere felis non efficitur. Mauris mollis elit urna, id tempus.',
  },
];

export const handlers = [
  rest.get('/sports', (req, res, ctx) => res(ctx.json(eventList))),
  rest.get('/sportdetail', (req, res, ctx) => res(ctx.json(eventDetail))),
  rest.get('/sportdetail/:eventId', (req, res, ctx) => {
    const { eventId } = req.params;

    return res(ctx.json(eventDetail[eventId]));
  }),

  rest.post('https://telemetry.nextjs.org/api/v1/record', (_, res) => res()),
];
