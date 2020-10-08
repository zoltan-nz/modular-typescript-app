import { Router } from 'express';
import { sendServerIsRunning } from '../controllers/root';

/**
 * The main route.
 *
 * @type {Router}
 */
const rootRouter: Router = Router();

rootRouter.get('/', sendServerIsRunning);

export { rootRouter };
