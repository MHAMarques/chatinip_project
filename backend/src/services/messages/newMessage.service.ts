import AppDataSource from "../../data-source";
import { User } from "../../entities/user.entity";
import { Message } from "../../entities/message.entity";
import { IMessageRequest } from "../../interfaces/messages";
import { messageResponseSchema } from "../../schemas/message.schema";
import AppError from "../../errors/AppError";

const newMessageService = async (messageInfo:IMessageRequest, userId: string) => {
    const messageRepo = AppDataSource.getRepository(Message);
    const userRepo = AppDataSource.getRepository(User);

    const userInfo: User = await userRepo.findOneBy({
        id: userId,
    });
    if(!userInfo){
        throw new AppError(406, "Invalid User")
    }
    
    const newMessage = messageRepo.create({...messageInfo, user: userInfo});
    await messageRepo.save(newMessage);
    
    const returnMessage = await messageResponseSchema.validate(newMessage, {stripUnknown: true})
    return returnMessage;
}

export default newMessageService;