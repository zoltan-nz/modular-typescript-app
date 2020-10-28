import cors, { CorsOptions } from 'cors';

const allowedOrigin = process.env.ALLOWED_ORIGIN;

const corsOptions: CorsOptions = {
  preflightContinue: true,
  methods: 'GET,POST,OPTIONS',
  origin: allowedOrigin?.split(','),
};

const applyCors = cors(corsOptions);

export default applyCors;
