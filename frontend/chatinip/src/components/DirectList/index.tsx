/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUserMessage } from "../../interfaces"
import { ListDiv } from "../../styles/chat"

type DirectListProps = {
    messages: IUserMessage[] | void;
    userId: string | undefined;
}

export const DirectList = ({messages, userId}: DirectListProps) => {
    
    const filterReceived = (messages: IUserMessage[], userId: string | undefined) => {
        const uniqueMessages:any = {};
        
        messages.forEach((message) => {
            if (message.user.id !== userId && (!uniqueMessages[message.user.id] || uniqueMessages[message.user.id].createdAt < message.createdAt)) {
            uniqueMessages[message.user.id] = message;
            }
        });
        
        return Object.values(uniqueMessages);
    };
    const filteredReceived = filterReceived(messages?messages:[], userId);
    return(
        <ListDiv>
            <h2>Recebidas</h2><hr />
            <ul>
            {filteredReceived.length == 0 ? <small>Não há mensagens</small> : ''}
            {filteredReceived.map((message:any) => (
                <li key={message?.id}>
                    <p>@ <a href={'?direct='+ message.user.id}>{message.user.name}</a></p>
                </li>
            ))}
            </ul>
        </ListDiv>
    )
}