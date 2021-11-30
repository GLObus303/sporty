import { rest } from 'msw';

import { Event, EventType } from '../model/Event';

let event: Event[] = [
  {
    id: '60333292-7ca1-4361-bf38-b6b43b90cb16',
    title: 'LOLO',
    location: 'U průhonu 7a',
    date: '22.12.2021',
    time: '15:00',
    capacity: 100,
    price: 'Zdarma',
    description:
      'Lord of The Rings, is with no absolute hesitation, my most favored and adored book by‑far. The triology is wonderful‑ and I really consider this a legendary fantasy series. It will always keep you at the edge of your seat‑ and the characters you will grow and fall in love with!',
  },
  {
    id: '60333292-7ca1-4361-bf38-b6b43b90cb17',
    title: 'LOLO',
    location: 'U průhonu 8a',
    date: '22.12.2021',
    time: '15:00',
    capacity: 100,
    price: 'Zdarma',
    description:
      'Lord of The Rings, is with no absolute hesitation, my most favored and adored book by‑far. The triology is wonderful‑ and I really consider this a legendary fantasy series. It will always keep you at the edge of your seat‑ and the characters you will grow and fall in love with!',
  },
  {
    id: '60333292-7ca1-4361-bf38-b6b43b90cb18',
    title: 'LOLO',
    location: 'U průhonu 9a',
    date: '22.12.2021',
    time: '15:00',
    capacity: 100,
    price: 'Zdarma',
    description:
      'Lord of The Rings, is with no absolute hesitation, my most favored and adored book by‑far. The triology is wonderful‑ and I really consider this a legendary fantasy series. It will always keep you at the edge of your seat‑ and the characters you will grow and fall in love with!',
  },
  {
    id: '60333292-7ca1-4361-bf38-b6b43b90cb19',
    title: 'LOLO',
    location: 'U průhonu 10a',
    date: '22.12.2021',
    time: '15:00',
    capacity: 100,
    price: 'Zdarma',
    description:
      'Lord of The Rings, is with no absolute hesitation, my most favored and adored book by‑far. The triology is wonderful‑ and I really consider this a legendary fantasy series. It will always keep you at the edge of your seat‑ and the characters you will grow and fall in love with!',
  },
];

const eventTypeList: EventType[] = [
  {
    id: '1',
    title: 'Footbal',
  },
  {
    id: '2',
    title: 'Tenis',
  },
  {
    id: '3',
    title: 'Bowling',
  },
  {
    id: '4',
    title: 'PingPong',
  },
  {
    id: '5',
    title: 'Chess',
  },
];

export const handlers = [
  rest.get('/eventType', (req, res, ctx) => res(ctx.json(eventTypeList))),
  rest.get('/event', (req, res, ctx) => res(ctx.json(event))),
  rest.get('/event/:eventId', (req, res, ctx) => {
    const { eventId } = req.params;

    const eve = event.filter((ev) => ev.id === eventId);

    return res(ctx.json(eve[0]));
  }),
  rest.post('/newevent', (req, res, ctx) => {
    const id = eventTypeList[eventTypeList.length - 1]?.id + 1 || 1;
    const newEvent = {
      id: id,
      title: req.body.title,
      location: req.body.location,
      date: req.body.date,
      time: req.body.time,
      capacity: req.body.capacity,
      price: req.body.price,
      description: req.body.description,
    };
    event = [...event, newEvent];
    console.log(event);

    return res(ctx.delay(500), ctx.status(201), ctx.json(newEvent));
  }),
  rest.post('https://telemetry.nextjs.org/api/v1/record', (_, res) => res()),
];
