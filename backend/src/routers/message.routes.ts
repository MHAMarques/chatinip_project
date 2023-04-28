import { Router } from "express";
import { newMessageController, listMessagesController, channelMessagesController, updateMessageController, deleteMessageController } from "../controllers/messages.controller";
import { validChannelIdMiddleware, validMessageIdMiddleware } from "../middleware/validId.middleware";
import validOwnerMiddleware from "../middleware/validOwner.middleware";
import validTokenMiddleware from "../middleware/validToken.middleware";

const messageRoutes = Router();

messageRoutes.post('',validTokenMiddleware, newMessageController);
messageRoutes.get('', validTokenMiddleware, listMessagesController);
messageRoutes.get('/:id', validTokenMiddleware, validChannelIdMiddleware, channelMessagesController);
messageRoutes.patch('/:id', validTokenMiddleware, validMessageIdMiddleware, validOwnerMiddleware, updateMessageController);
messageRoutes.delete('/:id', validTokenMiddleware, validMessageIdMiddleware, validOwnerMiddleware, deleteMessageController);

export default messageRoutes;
