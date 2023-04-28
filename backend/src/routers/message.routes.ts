import { Router } from "express";
import { newUserController, listUsersController, updateUserController, deleteUserController, getUserController, getProfileController } from "../controllers/users.controller";
import validAdmMiddleware from "../middleware/validAdm.middleware";
import validEmailMiddleware from "../middleware/validEmail.middleware";
import { validUserIdMiddleware } from "../middleware/validId.middleware";
import validTokenMiddleware from "../middleware/validToken.middleware";
import { validUserMiddleware } from "../middleware/validUser.middleware";

const messageRoutes = Router();

messageRoutes.post('', validEmailMiddleware, newUserController);
messageRoutes.get('', validTokenMiddleware, listUsersController);
messageRoutes.get('/profile', validTokenMiddleware, getProfileController);
messageRoutes.get('/:id', validTokenMiddleware, validAdmMiddleware, getUserController);
messageRoutes.patch('/:id', validTokenMiddleware, validAdmMiddleware, validUserMiddleware, validEmailMiddleware, updateUserController);
messageRoutes.delete('/:id', validTokenMiddleware, validAdmMiddleware, validUserMiddleware, deleteUserController);

export default messageRoutes;
