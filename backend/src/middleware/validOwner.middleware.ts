import AppDataSource from "../data-source";
import { Request, Response, NextFunction} from "express";
import { Message } from "../entities/message.entity";
import AppError from "../errors/AppError";
import 'dotenv/config';

const validOwnerMiddleware = async ( req:Request, res:Response, nxt:NextFunction) => {
    const checkId = req.params.id;
    const messageRepo = AppDataSource.getRepository(Message);
    
    const validQuery = await messageRepo
    .createQueryBuilder("message")
    .where("message.user.id = :user", { user: req.user.id })
    .andWhere("message.id = :id" , {id: checkId})
    .getOne();

    if(req.user.isAdmin || validQuery){return nxt();}
    throw new AppError(401, 'Unauthorized credential.');    
}

export default validOwnerMiddleware