import { Router } from "express";
import { newChannelController, getChannelController, listChannelsController, updateChannelController, deleteChannelController } from "../controllers/channels.controller";
import { validChannelIdMiddleware } from "../middleware/validId.middleware";
import validAdmMiddleware from "../middleware/validAdm.middleware";
import validChannelMiddleware from "../middleware/validChannel.middleware";
import validTokenMiddleware from "../middleware/validToken.middleware";

const channelRoutes = Router();

channelRoutes.post('',validTokenMiddleware, validAdmMiddleware, validChannelMiddleware, newChannelController);
channelRoutes.get('', validTokenMiddleware, listChannelsController);
channelRoutes.get('/:id', validTokenMiddleware, validChannelIdMiddleware, getChannelController);
channelRoutes.patch('/:id', validTokenMiddleware, validAdmMiddleware, validChannelIdMiddleware, validChannelMiddleware, updateChannelController);
channelRoutes.delete('/:id', validTokenMiddleware, validAdmMiddleware, validChannelIdMiddleware, deleteChannelController);

export default channelRoutes;
