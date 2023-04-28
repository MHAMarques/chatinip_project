import AppDataSource from "../data-source";
import { Request, Response, NextFunction } from "express";
import AppError from "../errors/AppError";
import { User } from "../entities/user.entity";
import { Channel } from "../entities/channel.entity";

export const validUserIdMiddleware = async ( req:Request, res:Response, nxt:NextFunction) => {
    const checkId = req.params.id;
    const userRepo = AppDataSource.getRepository(User);
    
    const validQuery = await userRepo.findOneBy({id: checkId});
    if(String(validQuery) === 'null'){
        throw new AppError(404, 'User not found!');
    }
    return nxt();    
}

export const validChannelIdMiddleware = async ( req:Request, res:Response, nxt:NextFunction) => {
    const checkId = req.params.id;
    const channelRepo = AppDataSource.getRepository(Channel);
    
    const validQuery = await channelRepo.findOneBy({id: checkId});
    if(String(validQuery) === 'null'){
        throw new AppError(404, 'Channel not found!');
    }
    return nxt();    
}
