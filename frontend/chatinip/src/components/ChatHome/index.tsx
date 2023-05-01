import { IUserRespose } from "../../interfaces"
import { HomeSection } from "../../styles/chat"
import chatlogo from "../../assets/logoBrand.png"

type ChatHomeProps = {
    chatUser: IUserRespose | void;
}

export const ChatHome = ({chatUser}: ChatHomeProps) => {
    //
    return(
        <HomeSection>
            <img src={chatlogo} className='logo' alt="Chatinip Messenger" />
        </HomeSection>
    )
}