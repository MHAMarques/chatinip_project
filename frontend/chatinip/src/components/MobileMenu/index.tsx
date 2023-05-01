/* eslint-disable @typescript-eslint/no-explicit-any */
import { SelectMenu } from "../../styles/chat"
import { useContext, useEffect, useState } from "react"
import { WebContext } from "../../context"
import { IUserMessage, IUserChannels } from "../../interfaces"

type MobileMenuProps = {
    userId: string | undefined;
}

export const MobileMenu = ({userId}: MobileMenuProps) => {
    const { navigate, userMessages, userChannels } = useContext(WebContext);
    const [userChat, setUserChat] = useState<IUserMessage[] | void>()
    const [listChannels, setListChannels] = useState<IUserChannels[] | void>();
    useEffect(() => {
        
        async function getUser(){
            const dataMessages = await userMessages();
            const dataChannels = await userChannels();
            
            setUserChat(dataMessages);
            setListChannels(dataChannels);
            
        }
        getUser();

    }, [ userMessages, userChannels]);
    
    const filterReceived = (messages: IUserMessage[], userId: string | undefined) => {
        const uniqueMessages:any = {};
        
        messages.forEach((message) => {
            if (message.user.id !== userId && (!uniqueMessages[message.user.id] || uniqueMessages[message.user.id].createdAt < message.createdAt)) {
            uniqueMessages[message.user.id] = message;
            }
        });
        
        return Object.values(uniqueMessages);
    };
    const filteredReceived = filterReceived(userChat?userChat:[], userId);

    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) =>
    {
        const url = event.target.value;
        navigate(url)
    }
    return(
        <SelectMenu>
            <select name="menu" id="menu" onChange={handleSelect}>
                <option>Menu</option>

                <optgroup label="Canais">
                {listChannels?.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)).map((channel) => (
                    <option key={channel.id} value={'?channel='+channel.id}>
                        # {channel.name}
                    </option>
                ))}
                </optgroup>
                
                <optgroup label="Recebidas">
                {filteredReceived.map((message:any) => (
                    <option key={message?.id} value={'?direct='+ message.user.id}>
                        @ {message.user.name}
                    </option>
                ))}
                </optgroup>

                <optgroup label="Opções">
                    <option>Θ Editar</option>
                    <option value={'?log=off'}>Θ Sair</option>
                </optgroup>
            </select>
        </SelectMenu>
    )
}