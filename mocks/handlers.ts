import { rest } from 'msw';

export const handlers = [
  rest.get('/sports', (req, res, ctx) =>
    res(
      ctx.json({
        "sports": [
          {
            title: 'Fotbal',
            description:
              'Fotbal Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales posuere felis non efficitur. Mauris mollis elit urna, id tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales posuere felis non efficitur. Mauris mollis elit urna, id tempus.'
          },
          {
            title: 'Tenis',
            description:
              'Tenis Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales posuere felis non efficitur. Mauris mollis elit urna, id tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales posuere felis non efficitur. Mauris mollis elit urna, id tempus.'
          },
          {
            title: 'Bowling',
            description:
              'Bowling Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales posuere felis non efficitur. Mauris mollis elit urna, id tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales posuere felis non efficitur. Mauris mollis elit urna, id tempus.'
          },
          {
            title: 'PingPong',
            description:
              'Ping Pong Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales posuere felis non efficitur. Mauris mollis elit urna, id tempus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sodales posuere felis non efficitur. Mauris mollis elit urna, id tempus.'
          }
        ]
      }),
    ),
  ),
  rest.get('/sportdetail', (req, res, ctx) =>
    res(
      ctx.json({
        "60333292-7ca1-4361-bf38-b6b43b90cb16": [
          {
            location: "U průhonu 7a",
            date: "22.12.2021",
            time: "15:00", 
            activity: "Odpolední výlet na Vítkov",
            capacity: 100,
            price: "Zdarma",
            event_name: "Name of the event",
            text: "Lord of The Rings, is with no absolute hesitation, my most favored and adored book by‑far. The triology is wonderful‑ and I really consider this a legendary fantasy series. It will always keep you at the edge of your seat‑ and the characters you will grow and fall in love with!"
          }
        ]
      }),
    ),
  ),
  rest.post('https://telemetry.nextjs.org/api/v1/record', (_, res) => res()),
];
