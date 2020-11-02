import { RequestHandler } from 'express';

const sendServerIsRunning: RequestHandler = (_, res) => res.json({ message: 'Server is running...' });

export { sendServerIsRunning };
