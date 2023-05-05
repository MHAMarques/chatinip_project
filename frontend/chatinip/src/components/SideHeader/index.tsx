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
                    {user?.isAdmin ? <img src={chatlogo} className='logo' alt="Chatinip Messenger" /> : <Avatar username={user?.name[0]} />}
                    
                </a>
            </div>
            <div>
                <h5><a href="?edit=user">{user?.name}</a></h5>
                <span>{user?.email}</span>
            </div>
        </SideProfile>
    )
}