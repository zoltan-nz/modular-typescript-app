import { Request, Response, Router } from 'express';

/**
 * The main route.
 *
 * @type {Router}
 */
const usersRouter: Router = Router();

usersRouter.get('/users', (req: Request, res: Response) => {
  res.json({
    message: 'Users...',
  });
});

export { usersRouter };
