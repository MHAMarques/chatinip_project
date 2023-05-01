import AppDataSource from "../../data-source";
import { Channel } from "../../entities/channel.entity";
import { IChannelResponse } from "../../interfaces/channels";
import { channelResponseSchema } from "../../schemas/channel.schemas";

const getChannelService = async (channelId: string): Promise<IChannelResponse> => {
    const channelRepo = AppDataSource.getRepository(Channel);
    const getChannel = await channelRepo
    .createQueryBuilder("channel")
    .where("channel.id = :id", { id: channelId })
    .getOne();
    
    const returnInfo = await channelResponseSchema.validate(
        getChannel,
        {
            stripUnknown: true,
        }
    );
    return returnInfo;
}

export default getChannelService;