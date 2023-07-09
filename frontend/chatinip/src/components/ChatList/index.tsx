/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IChatChannel, IUserMessage, IUserRespose } from "../../interfaces"
import { DirectMessage, ChannelMessage } from "../ChatMessages"
import { useContext, useEffect, useState } from "react"
import { WebContext } from "../../context"

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
        <>
        <h4># {chatInfo?.name}</h4><hr />
        <ul id='chatWindow'>
            {chatMessages?.sort((a, b) => (a.createdAt > b.createdAt) ? 1 : ((b.createdAt > a.createdAt) ? -1 : 0)).map((chatMessage) => (
                <ChannelMessage key={chatMessage.id} chatMessage={chatMessage} chatUser={chatUser} />
            ))}
        </ul>
        </>
    )
}

export const DirectChat = ({chatMessages, chatUser, chatInfo}: DirectChatProps) => {
    const directName = chatMessages?.find((message) => message.user.id === chatInfo)?.user.name;
    const { getProfile } = useContext(WebContext);
    const [userProfile, setUserProfile] = useState<IUserRespose>();

    useEffect(() => {
        async function getUser(data: string){
            const userInfo = await getProfile(data);
            setUserProfile(userInfo!);
        }
        chatInfo ? getUser(chatInfo) : ''
        
        
    }, [getProfile, chatInfo])

    return(
        <>
        <h4>@ {!directName ? userProfile?.name : directName}</h4><hr />
        <ul id='chatWindow'>
            {chatMessages?.filter((chatMessage) => chatMessage.user.id === chatInfo || chatMessage.user.id === chatUser?.id && chatMessage.receiver === chatInfo)
            .sort((a, b) => (a.createdAt > b.createdAt) ? 1 : ((b.createdAt > a.createdAt) ? -1 : 0)).map((chatMessage) => (
                <DirectMessage key={chatMessage.id} chatMessage={chatMessage} chatUser={chatUser} />
            ))}
        </ul>
        </>
    )
}