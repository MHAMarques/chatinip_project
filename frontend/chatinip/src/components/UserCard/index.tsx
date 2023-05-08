import { IUserRespose } from "../../interfaces"
import chatlogo from '../../assets/logoIcon.png'
import { SideProfile } from "../../styles/chat"
import { Avatar } from "../Avatar"

type SideHeaderProps = {
    userInfo: IUserRespose | void;
    chatUser: IUserRespose | void;
}

export const UserCard = ({userInfo, chatUser}: SideHeaderProps) => {
    let userLink = '';
    !userInfo?.isActive ? userLink = '' : chatUser?.id != userInfo?.id ? userLink = "?direct="+userInfo?.id : userLink = '' ;
    

    return(
        <SideProfile>
            <div>
                <a href={userLink}>
                    {userInfo?.isAdmin ? <img src={chatlogo} width={42} height={42} className='logo' alt="Chatinip Messenger" /> : <Avatar username={userInfo?.name[0]} />}
                </a>
            </div>
            <div>
                <h5>{userInfo?.name}</h5>
                <span>{userInfo?.email}</span>
                {chatUser?.isAdmin && userInfo?.id != chatUser?.id ? userInfo?.isActive ? <small>- <a href={"?active="+userInfo.id}>Desativar</a></small> : <small>- <a href={"?active="+userInfo?.id}>Activar</a> | <a href={"?remove="+userInfo?.id}>Remover</a></small> : '' }
            </div>
        </SideProfile>
    )
}