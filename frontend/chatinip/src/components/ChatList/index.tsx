/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { IChatChannel, IUserMessage, IUserRespose } from "../../interfaces"
import { DirectMessage, ChannelMessage } from "../ChatMessages"
import { useEffect, useState, useContext, } from "react"
import { useLocation } from "react-router-dom"
import socket from "../../socket"
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
    const { navigate } = useContext(WebContext);
    const queryLocation = useLocation();
    const queryParams = new URLSearchParams(queryLocation.search);
    const queryChannel = queryParams.get('channel');
    const [socketInstance] = useState(socket());

    useEffect(() => {
        socketInstance.on('message', (message) =>{
            if(queryChannel == message.receiver){
                navigate(`?channel=${queryChannel}`);
            }
        });
        
        return () => {
            socketInstance.off('message');
        }
    },[socketInstance, queryChannel, navigate]);

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
    const { navigate } = useContext(WebContext);
    const queryLocation = useLocation();
    const queryParams = new URLSearchParams(queryLocation.search);
    const queryDirect = queryParams.get('direct');
    const [socketInstance] = useState(socket());

    useEffect(() => {
        socketInstance.on('message', (message) =>{
            if(queryDirect == message.receiver || message.receiver == chatUser!.id){
                navigate(`?direct=${queryDirect}`);
            }
        });

        return () => {
            socketInstance.off('message');
        }
    },[socketInstance, queryDirect, chatUser, navigate]);

    const directName = chatMessages?.find((message) => message.user.id === chatInfo)?.user.name;
    return(
        <>
        <h4>@ {directName}</h4><hr />
        <ul id='chatWindow'>
            {chatMessages?.filter((chatMessage) => chatMessage.user.id === chatInfo || chatMessage.user.id === chatUser?.id && chatMessage.receiver === chatInfo)
            .sort((a, b) => (a.createdAt > b.createdAt) ? 1 : ((b.createdAt > a.createdAt) ? -1 : 0)).map((chatMessage) => (
                <DirectMessage key={chatMessage.id} chatMessage={chatMessage} chatUser={chatUser} />
            ))}
        </ul>
        </>
    )
}