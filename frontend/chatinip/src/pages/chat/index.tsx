import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import { WebContext } from "../../context";
import { IUserRespose, IUserMessage, IUserChannels, IChatChannel } from "../../interfaces"
import { MainChat, AsideInfo, MessengerChat, ChatInput } from "../../styles/chat"
import { SideHeader } from "../../components/SideHeader";
import { ChannelChat, DirectChat } from "../../components/ChatList";
import { ChatHome } from "../../components/ChatHome";
import { ChannelList } from "../../components/ChannelList";
import { DirectList } from "../../components/DirectList";
import { OptionList } from "../../components/OptionList";
import { MessageForm } from "../../components/MessageForm";
import { MobileMenu } from "../../components/MobileMenu";
import socket from "../../socket";

export const ChatPage = () => {
    const { navigate, token, userProfile, userMessages, channelMessages, channelInfo, userChannels } = useContext(WebContext);
    const [user, setUser] = useState<IUserRespose | void>()
    const [userChat, setUserChat] = useState<IUserMessage[] | void>()
    const [channelChat, setChannelChat] = useState<IUserMessage[] | void>()
    const [channelName, setChannelName] = useState<IChatChannel | void>()
    const [directId, setDirectId] = useState<string | null>(null)
    const [channelId, setChannelId] = useState<string | null>(null)
    const [listChannels, setListChannels] = useState<IUserChannels[] | void>();
    const [direct, setDirect] = useState<string | null>(null);
    const [channel, setChannel] = useState<string | null>(null);
    const location = useLocation();
    const chatWindow = document.getElementById("chatWindow");
    const [socketInstance] = useState(socket());

    useEffect(() => {
        chatWindow?.scrollTo(0, chatWindow.scrollHeight+500);
    },[channelChat, userChat, chatWindow]);

    useEffect(() => {
        async function getUserMessages(){
            const dataMessages = await userMessages();
            setUserChat(dataMessages);
        }

        async function getChannelMessages(){
            const dataChannelMessages = await channelMessages();
            const dataChannelInfo = await channelInfo(); 
            setChannelChat(dataChannelMessages);
            setChannelName(dataChannelInfo);
            
        }
        const queryParams = new URLSearchParams(location.search);
        const queryDirect = queryParams.get('direct');
        const queryChannel = queryParams.get('channel');
        socketInstance.on('message', (message) =>{
            if(queryChannel == message.receiver){
                getChannelMessages();
            }
            else if(queryDirect == message.receiver || message.receiver == user?.id){
                getUserMessages();
            }
        });
        setDirect(queryDirect);
        setChannel(queryChannel);

    },[user, userChat, channelChat, socketInstance, userMessages, channelMessages, channelInfo, location]);
    
    useEffect(() => {
        
        async function getUser(){
            const dataProfile = await userProfile();
            const dataMessages = await userMessages();
            const dataChannels = await userChannels();
            
            setUser(dataProfile);
            setUserChat(dataMessages);
            setListChannels(dataChannels);
            
        }

        async function getChannelMessages(){
            const dataChannelMessages = await channelMessages();
            const dataChannelInfo = await channelInfo();
            
            setChannelChat(dataChannelMessages);
            setChannelName(dataChannelInfo);
            
        }
        
        if(token){
            
            const queryParams = new URLSearchParams(location.search);
            const queryDirect = queryParams.get('direct');
            const queryChannel = queryParams.get('channel');
            const queryLogOff = queryParams.get('log');
           
            setDirect(queryDirect);
            setChannel(queryChannel);

            if(queryChannel && queryDirect){navigate('/');}
            if(queryChannel){
                setChannelId(queryChannel);
                getChannelMessages();
            }if(queryDirect){
                setDirectId(queryDirect);
            }
            if(queryLogOff == 'off'){
                localStorage.removeItem("chatinip:Token");
                socketInstance.off('message');
                socketInstance.disconnect();
                navigate('/');
                
            }
            getUser();
            
        }
        else{navigate('/');}

    }, [socketInstance, navigate, token, userProfile, userMessages, channelMessages, channelInfo, userChannels, location]);
    
    return (
        <MainChat>
            <AsideInfo>
                <SideHeader user={user} />
                <ChannelList channels={listChannels}/>
                <DirectList messages={userChat} userId={user?.id} />
                <OptionList isAdmin={user?.isAdmin}/>
            </AsideInfo>
            <MessengerChat>
                <MobileMenu userId={user?.id}/>
                <article>
                    {direct ? <DirectChat chatMessages={userChat} chatUser={user} chatInfo={directId}/> : channel? <ChannelChat chatMessages={channelChat} chatUser={user} chatInfo={channelName} /> : <ChatHome chatUser={user} />}
                </article>
                <ChatInput >
                    {direct ? <MessageForm receiverId={directId} direct={true} /> : channel? <MessageForm receiverId={channelId} direct={false} /> : ''}
                </ChatInput>
            </MessengerChat>
            
        </MainChat>
    )
}