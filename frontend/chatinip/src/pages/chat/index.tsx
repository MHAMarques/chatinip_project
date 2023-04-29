import { useContext, useEffect, useState } from "react"
import { WebContext } from "../../context";
import { IUserRespose, IUserMessage } from "../../interfaces"
import { MainChat, AsideChat, FooterAuthor, MessengerChat, ChatInput } from "../../styles/chat"
import { SideHeader } from "../../components/SideHeader";

export const ChatPage = () => {
    const { navigate, token, userProfile, userMessages } = useContext(WebContext);
    const [user, setUser] = useState<IUserRespose | void>()
    const [userChat, setUserChat] = useState<IUserMessage[] | void>()

    useEffect(() => {
        async function getUser(){
            const dataProfile = await userProfile();
            const dataMessages = await userMessages();
            
            setUser(dataProfile);
            setUserChat(dataMessages);
        }
        
        if(token){getUser();}
        else{navigate('/');}

    }, [navigate, token, userProfile, userMessages]);

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
                    <p>Input</p>
                </article>
                <ChatInput >
                    <input type="text" /><button>Enviar</button>
                </ChatInput>
            </MessengerChat>
            
        </MainChat>
    )
}