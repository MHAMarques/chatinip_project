import { Request, Response } from "express";
import { IMessageRequest, IMessageResponse, IMessageUpdate } from "../interfaces/messages";
import { newMessageSchema, updateMessageSchema } from "../schemas/message.schema";
import newMessageService from "../services/messages/newMessage.service";
import listMessagesService from "../services/messages/listMessages.service";
import channelMessagesService from "../services/messages/channelMessages.service";
import updateMessageService from "../services/messages/updateMessage.service";
import deleteMessageService from "../services/messages/deleteMessage.service";
import AppError from "../errors/AppError";

export const newMessageController = async(req: Request, res: Response) => {
    try {
        const valid = await newMessageSchema.validate(req.body,{
            stripUnknown: true,
            abortEarly: false
        })
        const messageInfo: IMessageRequest = valid;
        const userId = req.user.id;
        const messageData = await newMessageService(messageInfo, userId);
        return res.status(201).json(messageData);
    } catch (error) {
        throw new AppError(400, error.errors);
    }
}

export const listMessagesController = async(req: Request, res: Response) => {
    const receiverId: string = req.user.id;
    const messageData = await listMessagesService(receiverId);
    return res.status(200).json(messageData);
}

export const channelMessagesController = async(req: Request, res: Response) => {
    const channelId: string = req.params.id;
    const messageData = await channelMessagesService(channelId);
    return res.status(200).json(messageData);
}

export const updateMessageController =async (req:Request, res: Response) => {
    try {
        const valid = await updateMessageSchema.validate(req.body,{
            stripUnknown: true,
            abortEarly: false
        })
        const messageId: string = req.params.id;
        const messageInfo: IMessageUpdate = valid;
        if(JSON.stringify(messageInfo) === '{}'){
            return res.status(401).json({message: 'Unauthorized update.'});
        }
        const messageData = await updateMessageService(messageId, messageInfo);
        return res.status(200).json(messageData);
    } catch (error) {
        throw new AppError(400, error.errors);
    }
}

export const deleteMessageController = async(req: Request, res: Response) => {
    const messageId: string = req.params.id;
    const messageData = await deleteMessageService(messageId);
    return res.status(204).json(messageData);
}