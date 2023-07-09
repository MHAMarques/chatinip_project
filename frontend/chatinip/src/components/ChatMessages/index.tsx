import { MessageItem } from "../../styles/chat"
import { IUserMessage, IUserRespose } from "../../interfaces"

type DirectMessageProps = {
    chatMessage: IUserMessage;
    chatUser: IUserRespose | void;
}

type ChannelMessageProps = {
    chatMessage: IUserMessage;
    chatUser: IUserRespose | void;
}

function formatDate(date: Date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
  
    return `${day}-${month}-${year} ( ${hours}:${minutes} )`;
}

export const DirectMessage = ({chatMessage, chatUser}: DirectMessageProps) => {
    const messageDate = new Date(chatMessage.createdAt);
    const formattedDate = formatDate(messageDate);
    
    return(
        <>
            <MessageItem key={chatMessage.id}>
                <div className={chatMessage.receiver != chatUser?.id ? 'sender' : 'receiver'}>
                    <h4 className={chatMessage.receiver != chatUser?.id ? 'reverser' : '#'}>
                        <a href={chatMessage.receiver == chatUser?.id ? '?direct='+chatMessage.user.id : '/chat' } title="Enviar mensagem direta">{chatMessage.user.name}</a>
                        <small>{formattedDate}</small>
                    </h4>
                    <h3>{chatMessage.message}</h3>
                </div>
            </MessageItem>
        </>
    )
}

export const ChannelMessage = ({chatMessage, chatUser}: ChannelMessageProps) => {
    const messageDate = new Date(chatMessage.createdAt);
    const formattedDate = formatDate(messageDate);
    
    return(
        <>
            <MessageItem key={chatMessage.id}>
                <div className={chatMessage.user.id == chatUser?.id ? 'sender' : 'receiver'}>
                    <h4 className={chatMessage.user.id == chatUser?.id ? 'reverser' : '#'}>
                        <a href={chatMessage.user.id != chatUser?.id ? '?direct='+chatMessage.user.id : '/' } title="Enviar mensagem direta">{chatMessage.user.name}</a>
                        <small>{formattedDate}</small>
                    </h4>
                    <h3>{chatMessage.message}</h3>
                </div>
            </MessageItem>
        </>
    )
}