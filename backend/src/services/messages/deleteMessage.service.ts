import AppDataSource from "../../data-source";
import { Message } from "../../entities/message.entity";

const deleteMessageService = async (messageId:string) => {
    const messageRepo = AppDataSource.getRepository(Message);
    
    await messageRepo
        .createQueryBuilder("message")
        .delete()
        .where("id = :id", { id: messageId })
        .execute()

    return;
}

export default deleteMessageService;