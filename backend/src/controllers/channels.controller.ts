import { Request, Response } from "express";
import { IChannelRequest, IChannelResponse, IChannelUpdate } from "../interfaces/channels";
import { newChannelSchema, updateChannelSchema } from "../schemas/channel.schemas";
import newChannelService from "../services/channels/newChannel.service";
import listChannelsService from "../services/channels/listChannels.service";
import getChannelService from "../services/channels/getChannel.service";
import updateChannelService from "../services/channels/updateChannel.service";
import deleteChannelService from "../services/channels/deleteChannel.service";
import AppError from "../errors/AppError";

export const newChannelController = async(req: Request, res: Response) => {
    try {
        const valid = await newChannelSchema.validate(req.body,{
            stripUnknown: true,
            abortEarly: false
        })
        const channelInfo: IChannelRequest = valid;
        const channelData = await newChannelService(channelInfo);
        return res.status(201).json(channelData);
    } catch (error) {
        throw new AppError(400, error.errors);
    }
}

export const listChannelsController = async(req: Request, res: Response) => {
    const channelData = await listChannelsService();
    return res.status(200).json(channelData);
}

export const getChannelController = async(req: Request, res: Response) => {
    const channelId: string = req.params.id;
    const channelData = await getChannelService(channelId);
    return res.status(200).json(channelData);
}

export const updateChannelController =async (req:Request, res: Response) => {
    try {
        const valid = await updateChannelSchema.validate(req.body,{
            stripUnknown: true,
            abortEarly: false
        })
        const channelId: string = req.params.id;
        const channelInfo: IChannelUpdate = valid;
        if(JSON.stringify(channelInfo) === '{}'){
            return res.status(401).json({message: 'Unauthorized update.'});
        }
        const channelData = await updateChannelService(channelId, channelInfo);
        return res.status(200).json(channelData);
    } catch (error) {
        throw new AppError(400, error.errors);
    }
}

export const deleteChannelController = async(req: Request, res: Response) => {
    const channelId: string = req.params.id;
    const channelData = await deleteChannelService(channelId);
    return res.status(204).json(channelData);
}