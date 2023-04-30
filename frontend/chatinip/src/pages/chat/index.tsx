import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import { WebContext } from "../../context";
import { IUserRespose, IUserMessage, IUserChannels } from "../../interfaces"
import { MainChat, AsideInfo, FooterAuthor, MessengerChat, ChatInput } from "../../styles/chat"
import { SideHeader } from "../../components/SideHeader";
import { ChatList } from "../../components/ChatList";
import { ChannelList } from "../../components/ChannelList";
import { DirectList } from "../../components/DirectList";
import { OptionList } from "../../components/OptionList";

export const ChatPage = () => {
    const { navigate, token, userProfile, userMessages, userChannels } = useContext(WebContext);
    const [user, setUser] = useState<IUserRespose | void>()
    const [userChat, setUserChat] = useState<IUserMessage[] | void>()
    const [listChannels, setListChannels] = useState<IUserChannels[] | void>();
    const [direct, setDirect] = useState<string | null>(null);
    const [channel, setChannel] = useState<string | null>(null);
    const location = useLocation();
    

    useEffect(() => {
        async function getUser(){
            const dataProfile = await userProfile();
            const dataMessages = await userMessages();
            const dataChannels = await userChannels();
            
            setUser(dataProfile);
            setUserChat(dataMessages);
            setListChannels(dataChannels);
        }
        
        if(token){
            getUser();
            
            const queryParams = new URLSearchParams(location.search);
            const queryDirect = queryParams.get('direct');
            const queryChannel = queryParams.get('channel');
            
            setDirect(queryDirect);
            setChannel(queryChannel);

            if(queryChannel && queryDirect){navigate('/');}
        }
        else{navigate('/');}

    }, [navigate, token, userProfile, userMessages, userChannels, location]);
    
    return (
        <MainChat>
            <AsideInfo>
                <SideHeader user={user} />
                <ChannelList channels={listChannels}/>
                <DirectList messages={userChat} userId={user?.id} />
                <OptionList />
                <FooterAuthor>
                    Desenvolvido por <a href="https://mh.app.br" target='_blank'>MH Marques</a>
                </FooterAuthor>
            </AsideInfo>
            <MessengerChat>
                <article>
                    {direct ? <ChatList chatMessages={userChat} chatUser={user} /> : channel? <ChatList chatMessages={userChat} chatUser={user} /> : <h1>Este é seu ambiente Chatinip</h1>}
                </article>
                <ChatInput >
                {direct ? <><input type="text" /><button>Enviar</button></> : channel? <><input type="text" /><button>Enviar</button></> : ''}
                    
                </ChatInput>
            </MessengerChat>
            
        </MainChat>
    )
}