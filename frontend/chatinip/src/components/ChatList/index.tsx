import { IChatChannel, IUserMessage, IUserRespose } from "../../interfaces"
import { DirectMessage, ChannelMessage } from "../ChatMessages"

type ChannelChatProps = {
    chatMessages: IUserMessage[] | void;
    chatUser: IUserRespose | void;
    chatInfo: IChatChannel | void;
}

type DirectChatProps = {
    chatMessages: IUserMessage[] | void;
    chatUser: IUserRespose | void;
    chatInfo: string | null;
}

export const ChannelChat = ({chatMessages, chatUser, chatInfo}: ChannelChatProps) => {
    return(
        <ul>
            <h4># {chatInfo?.name}</h4><hr />
            {chatMessages?.sort((a, b) => (a.createdAt > b.createdAt) ? 1 : ((b.createdAt > a.createdAt) ? -1 : 0)).map((chatMessage) => (
                <ChannelMessage key={chatMessage.id} chatMessage={chatMessage} chatUser={chatUser} />
            ))}
        </ul>
    )
}

export const DirectChat = ({chatMessages, chatUser, chatInfo}: DirectChatProps) => {
    const directName = chatMessages?.find((message) => message.user.id === chatInfo)?.user.name;

    return(
        <>
        <h4>@ {directName}</h4><hr />
        <ul>
            {chatMessages?.filter((chatMessage) => chatMessage.user.id === chatInfo || chatMessage.user.id === chatUser?.id && chatMessage.receiver === chatInfo)
            .sort((a, b) => (a.createdAt > b.createdAt) ? 1 : ((b.createdAt > a.createdAt) ? -1 : 0)).map((chatMessage) => (
                <DirectMessage key={chatMessage.id} chatMessage={chatMessage} chatUser={chatUser} />
            ))}
        </ul>
        </>
    )
}