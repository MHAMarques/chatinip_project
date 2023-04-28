import AppDataSource from "../data-source";
import { Request, Response, NextFunction} from "express";
import { Channel } from "../entities/channel.entity";
import AppError from "../errors/AppError";
import 'dotenv/config';

const validChannelMiddleware = async ( req:Request, res:Response, nxt:NextFunction) => {
    const checkChannel = req.body.name;
    const channelRepo = AppDataSource.getRepository(Channel);
    if(checkChannel){
        const validQuery = await channelRepo.findOneBy({name: checkChannel});

        if(String(validQuery) !== 'null'){
            throw new AppError(400, 'Channel name already registered.');
        }
    }
    
    return nxt();    
}

export default validChannelMiddleware