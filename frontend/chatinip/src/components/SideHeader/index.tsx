import { IUserRespose } from "../../interfaces"
import chatlogo from '../../assets/logoIcon.png'
import { SideProfile } from "../../styles/chat"
import { Avatar } from "../Avatar";

type SideHeaderProps = {
    user: IUserRespose | void;
}

export const SideHeader = ({user}: SideHeaderProps) => {
    //
    return(
        <SideProfile>
            <div>
                <a href="/chat">
                    {user?.isAdmin ? <img src={chatlogo} width={42} height={42} className='logo' alt="Chatinip Messenger" /> : <Avatar username={user?.name[0]} />}
                </a>
            </div>
            <div>
                <h5>{user?.name}</h5>
                <span>{user?.email}</span>
            </div>
        </SideProfile>
    )
}