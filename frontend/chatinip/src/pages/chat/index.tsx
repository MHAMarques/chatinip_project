import { useContext, useEffect, useState } from "react"
import { useLocation } from "react-router-dom";
import { WebContext } from "../../context";
import { IUserRespose, IUserMessage } from "../../interfaces"
import { MainChat, AsideChat, FooterAuthor, MessengerChat, ChatInput } from "../../styles/chat"
import { SideHeader } from "../../components/SideHeader";
import { ChatList } from "../../components/ChatList";

export const ChatPage = () => {
    const { navigate, token, userProfile, userMessages } = useContext(WebContext);
    const [user, setUser] = useState<IUserRespose | void>()
    const [userChat, setUserChat] = useState<IUserMessage[] | void>()
    const [direct, setDirect] = useState<string | null>(null);
    const [channel, setChannel] = useState<string | null>(null);
    const location = useLocation();
    

    useEffect(() => {
        async function getUser(){
            const dataProfile = await userProfile();
            const dataMessages = await userMessages();
            
            setUser(dataProfile);
            setUserChat(dataMessages);
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

    }, [navigate, token, userProfile, userMessages, location]);
    
    return (
        <MainChat>
            <AsideChat>
                <SideHeader user={user} />
                <FooterAuthor>
                    Desenvolvido por <a href="https://mh.app.br" target='_blank'>MH Marques</a>
                </FooterAuthor>
            </AsideChat>
            <MessengerChat>
                <article>
                    {direct ? <ChatList chatMessages={userChat} chatUser={user} /> : channel? <ChatList chatMessages={userChat} chatUser={user} /> : <h1>Bem vindo ao Chatinip</h1>}
                </article>
                <ChatInput >
                {direct ? <><input type="text" /><button>Enviar</button></> : channel? <><input type="text" /><button>Enviar</button></> : ''}
                    
                </ChatInput>
            </MessengerChat>
            
        </MainChat>
    )
}