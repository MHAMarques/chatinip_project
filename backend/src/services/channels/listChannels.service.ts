import AppDataSource from "../../data-source";
import { Channel } from "../../entities/channel.entity";
import { IChannelResponse } from "../../interfaces/channels";
import { channelListSchema } from "../../schemas/channel.schemas";

const listChannelsService = async (): Promise<IChannelResponse[]> => {
    const channelRepo = AppDataSource.getRepository(Channel);
    const listChannels = await channelRepo
    .createQueryBuilder("channel")
    .getMany();
    
    const returnInfo = await channelListSchema.validate(
        listChannels,
        {
            stripUnknown: true,
        }
    );
    return returnInfo;
}

export default listChannelsService;