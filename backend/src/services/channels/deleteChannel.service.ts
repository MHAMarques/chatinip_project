import AppDataSource from "../../data-source";
import { Channel } from "../../entities/channel.entity";

const deleteChannelService = async (channelId:string) => {
    const channelRepo = AppDataSource.getRepository(Channel);
    
    await channelRepo
        .createQueryBuilder("channel")
        .delete()
        .where("id = :id", { id: channelId })
        .execute()

    return;
}

export default deleteChannelService;