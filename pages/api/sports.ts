import { NextApiRequest, NextApiResponse } from 'next';

type ApiFunction = (req: NextApiRequest, res: NextApiResponse) => void;

const getSports: ApiFunction = (_req, res) =>
  res.status(200).json([{ name: 'Test sport' }]);

const handler: ApiFunction = (req, res) => {
  switch (req.method) {
    case 'GET':
      return getSports(req, res);
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
};

export default handler;
