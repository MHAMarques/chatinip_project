import { IUserRespose } from "../../interfaces"
import chatlogo from '../../assets/logoIcon.png'
import { SideProfile } from "../../styles/chat"

type SideHeaderProps = {
    user: IUserRespose | void;
}

export const SideHeader = ({user}: SideHeaderProps) => {
    return(
        <SideProfile>
            <div>
                <a href="/chat"><img src={chatlogo} className='logo' alt="Chatinip Messenger" /></a>
            </div>
            <div>
                <h5>{user?.name}</h5>
                <span>{user?.email}</span>
            </div>
        </SideProfile>
    )
}