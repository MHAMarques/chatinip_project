import { Router } from "express";
import { newUserController, listUsersController, updateUserController, deleteUserController, getUserController, getProfileController } from "../controllers/users.controller";
import validAdmMiddleware from "../middleware/validAdm.middleware";
import validEmailMiddleware from "../middleware/validEmail.middleware";
import { validUserIdMiddleware } from "../middleware/validId.middleware";
import validTokenMiddleware from "../middleware/validToken.middleware";
import { validUserMiddleware } from "../middleware/validUser.middleware";

const userRoutes = Router();

userRoutes.post('', validEmailMiddleware, newUserController);
userRoutes.get('', validTokenMiddleware, listUsersController);
userRoutes.get('/profile', validTokenMiddleware, getProfileController);
userRoutes.get('/:id', validTokenMiddleware, validUserIdMiddleware, getUserController);
userRoutes.patch('/:id', validTokenMiddleware, validUserIdMiddleware, validUserMiddleware, validEmailMiddleware, updateUserController);
userRoutes.delete('/:id', validTokenMiddleware, validUserIdMiddleware, validUserMiddleware, deleteUserController);

export default userRoutes;
