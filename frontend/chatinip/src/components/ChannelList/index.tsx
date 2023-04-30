import { IUserChannels } from "../../interfaces"
import { ListDiv } from "../../styles/chat"

type ChannelListProps = {
    channels: IUserChannels[] | void;
}

export const ChannelList = ({channels}: ChannelListProps) => {
    //
    return(
        <ListDiv>
            <h2>Canais</h2><hr />
            <ul>
            {channels?.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map((channel) => (
                <li key={channel.id}>
                    <p># <a href={'?channel='+channel.id}>{channel.name}</a></p>
                </li>
            ))}
            </ul>
        </ListDiv>
    )
}