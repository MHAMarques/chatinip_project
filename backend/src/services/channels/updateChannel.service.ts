import AppDataSource from "../../data-source";
import { Channel } from "../../entities/channel.entity";
import { IChannelUpdate, IChannelResponse } from "../../interfaces/channels";
import { channelResponseSchema, updateChannelSchema } from "../../schemas/channel.schemas";


const updateChannelService = async (channelId:string, channelInfo: IChannelUpdate) => {
    const channelRepo = AppDataSource.getRepository(Channel);
    
    const channelData: IChannelResponse = await channelRepo.findOneBy({id: channelId});
    const validUser = await updateChannelSchema.validate(channelInfo, {stripUnknown: true})
    const updateChannel = channelRepo.create({
        ...channelData,
        ...validUser
    })
    await channelRepo.save(updateChannel);
    
    const returnChannel = await channelResponseSchema.validate(updateChannel, {stripUnknown: true});
    return returnChannel;
}

export default updateChannelService;