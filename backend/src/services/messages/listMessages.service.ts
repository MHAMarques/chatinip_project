import AppDataSource from "../../data-source";
import { Message } from "../../entities/message.entity";
import { IMessageResponse } from "../../interfaces/messages";
import { messageListSchema } from "../../schemas/message.schema";

const listMessagesService = async (receiverId: string): Promise<IMessageResponse[]> => {
    const messageRepo = AppDataSource.getRepository(Message);
    const listMessages = await messageRepo
    .createQueryBuilder("message")
    .leftJoinAndSelect("message.user", "user")
    .select(["message", "user.name", "user.id"])
    .where("message.receiver = :receiverId", {receiverId: receiverId})
    .orWhere("message.user = :userId", {userId: receiverId})
    .andWhere("message.direct = :direct", {direct: true})
    .orderBy("user.name", "ASC")
    .addOrderBy("message.createdAt", "DESC")
    .getMany();
    
    const returnInfo = await messageListSchema.validate(
        listMessages,
        {
            stripUnknown: true,
        }
    );
    return returnInfo;
}

export default listMessagesService;