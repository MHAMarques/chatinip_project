import { Router } from "express";
import { newUserController, listUsersController, updateUserController, deleteUserController, getUserController, getProfileController } from "../controllers/users.controller";
import validAdmMiddleware from "../middleware/validAdm.middleware";
import validEmailMiddleware from "../middleware/validEmail.middleware";
import { validIdMiddleware } from "../middleware/validId.middleware";
import validTokenMiddleware from "../middleware/validToken.middleware";
import { validUserMiddleware } from "../middleware/validUser.middleware";

const userRoutes = Router();

userRoutes.post('', validEmailMiddleware, newUserController);
userRoutes.get('', validTokenMiddleware, listUsersController);
userRoutes.get('/profile', validTokenMiddleware, getProfileController);
userRoutes.get('/:id', validTokenMiddleware, validIdMiddleware, getUserController);
userRoutes.patch('/:id', validTokenMiddleware, validIdMiddleware, validUserMiddleware, validEmailMiddleware, updateUserController);
userRoutes.delete('/:id', validTokenMiddleware, validIdMiddleware, validUserMiddleware, deleteUserController);

export default userRoutes;
