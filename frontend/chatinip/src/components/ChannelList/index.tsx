import { INewChannel, IUserChannels } from "../../interfaces"
import { ListDiv } from "../../styles/chat"
import { useLocation } from "react-router-dom"
import { useContext } from "react"
import { ChatChanForm } from "../../styles/chat"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { WebContext } from "../../context"

type ChannelListProps = {
    channels: IUserChannels[] | void;
    isAdmin: boolean | undefined;
}

export const ChannelList = ({channels, isAdmin}: ChannelListProps) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const queryNewChan = queryParams.get('new');
    const queryChannel = queryParams.get('channel');
    
    return(
        <ListDiv>
            <h2>Canais</h2><hr />
            <ul>
            {isAdmin? <li>+ <a href="?new=chan">Criar canal</a></li> : ''}
            {isAdmin && queryNewChan? <li><NewChan /></li> : ''}
            {channels?.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map((channel) => (
                <li key={channel.id}>
                    <p># <a href={'?channel='+channel.id}>{channel.name}</a></p>
                    {isAdmin && queryChannel == channel.id? <small> ( <a href="#">Editar</a> / <a href="#">Deletar</a> )</small> : ''}
                    
                </li>
            ))}
            </ul>
        </ListDiv>
    )
}

const NewChan = () => {
    const yupSchema = yup.object().shape({
        name: yup.string().required(),
    });
    const { register, handleSubmit, reset } = useForm<INewChannel>({ resolver: yupResolver(yupSchema) });
    const { newChannel, navigate } = useContext(WebContext);

    const saveChannel = (data: INewChannel) => {
        newChannel(data);
        reset();
        navigate('/chat');
    }
    return(
        <ChatChanForm onSubmit={handleSubmit(saveChannel)}>
            <input type="text" {...register("name")} placeholder="Canal" />
            <button type="submit">Criar</button>
        </ChatChanForm>
    )
}