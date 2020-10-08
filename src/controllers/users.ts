import { RequestHandler } from 'express';

const getUsers: RequestHandler = (req, res) => {
  console.log(req.ip);
  res.json({ message: 'Users...' });
};

export { getUsers };
