import { IUserMessage, IUserRespose } from "../../interfaces"
import { ChatMessage } from "../ChatMessages"

type ChatListProps = {
    chatMessages: IUserMessage[] | void;
    chatUser: IUserRespose | void;
}

export const ChatList = ({chatMessages, chatUser}: ChatListProps) => {
    return(
        <ul>
            {chatMessages?.sort((a, b) => (a.createdAt > b.createdAt) ? 1 : ((b.createdAt > a.createdAt) ? -1 : 0)).map((chatMessage) => (
                <ChatMessage key={chatMessage.id} chatMessage={chatMessage} chatUser={chatUser} />
            ))}
        </ul>
    )
}