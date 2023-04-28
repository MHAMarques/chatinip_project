import AppDataSource from "../../data-source";
import { Channel } from "../../entities/channel.entity";
import { IChannelRequest } from "../../interfaces/channels";
import { channelResponseSchema } from "../../schemas/channel.schemas";

const newChannelService = async (channelInfo:IChannelRequest) => {
    const channelRepo = AppDataSource.getRepository(Channel);    
    const newChannel = channelRepo.create(channelInfo);
    
    await channelRepo.save(newChannel);
    const returnChannel = await channelResponseSchema.validate(newChannel, {stripUnknown: true})
    
    return returnChannel;
}

export default newChannelService;