import AppDataSource from "../../data-source";
import { Message } from "../../entities/message.entity";
import { IMessageUpdate } from "../../interfaces/messages";
import { messageResponseSchema } from "../../schemas/message.schema";

const updateMessageService = async (messageId:string, messageInfo: IMessageUpdate) => {
    const messageRepo = AppDataSource.getRepository(Message);
    
    const messageData = await messageRepo.findOneBy({id: messageId});
    const updateMessage = messageRepo.create({
        ...messageData,
        ...messageInfo
    })
    await messageRepo.save(updateMessage);
    
    const returnMessage = await messageResponseSchema.validate(updateMessage, {stripUnknown: true});
    return returnMessage;
}

export default updateMessageService;