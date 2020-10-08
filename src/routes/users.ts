import { Router } from 'express';
import { getUsers } from '../controllers/users';

/**
 * The main route.
 *
 * @type {Router}
 */
const usersRouter: Router = Router();

usersRouter.get('/users', getUsers);

export { usersRouter };
