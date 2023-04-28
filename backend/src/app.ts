import "reflect-metadata";
import express from "express";
import 'express-async-errors';
import userRoutes from "./routers/user.routes";
import loginRoutes from "./routers/login.routes";
import handleError from "./errors/HandleError";
import channelRoutes from "./routers/channel.routes";
import messageRoutes from "./routers/message.routes";


const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());
app.use('/users', userRoutes);
app.use('/login', loginRoutes);
app.use('/channels', channelRoutes);
app.use('/message', messageRoutes);

app.use(handleError);

export default app;