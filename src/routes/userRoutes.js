import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// router.get('/', userController.index);
// router.get('/', userController.show);

router.use(loginRequired);
router.post('/', userController.store);
router.put('/', userController.update);
router.delete('/', userController.delete);

export default router;
