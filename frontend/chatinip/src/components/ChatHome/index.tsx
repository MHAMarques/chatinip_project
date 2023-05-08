/* eslint-disable @typescript-eslint/no-explicit-any */
import { IUserRespose } from "../../interfaces"
import { HomeSection } from "../../styles/chat"
import chatlogo from "../../assets/logoBrand.png"
import { useContext, useEffect, useState } from "react"
import { WebContext } from "../../context"
import { UserCard } from "../UserCard"
import { useLocation } from "react-router-dom"

type ChatHomeProps = {
    chatUser: IUserRespose | void;
}

export const ChatHome = ({chatUser}: ChatHomeProps) => {
    const { getUsers, activeUser, deleteUser, navigate } = useContext(WebContext);
    const [userList, setUserList] = useState<IUserRespose[] | void>([]);
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const queryActivation = queryParams.get('active');
    const queryDelete = queryParams.get('remove');

    useEffect(() => {
        
        async function getUserList(){
            const responseList = await getUsers();
            setUserList(responseList);
        }
        
        if(queryActivation){
            activeUser(queryActivation);
            navigate('/chat');
        }
        else if(queryDelete){
            deleteUser(queryDelete);
            navigate('/chat');
        }
        else{
            getUserList();
        }

    },[getUsers, queryActivation, queryDelete, navigate, activeUser, deleteUser])

    return(
        <HomeSection>
            <img src={chatlogo} className='backG' alt="Chatinip Messenger" title={chatUser?.name} />
            <main>
                <h1>Participantes</h1>
                <hr />
                <ul>
                    {!userList ? <small>Não há usuários</small> : ''}
                    {userList?.map((chatObj:any) => (
                        <li key={chatObj?.id} className={!chatObj?.isActive && !chatUser?.isAdmin ? 'inactive' : ''}>
                            {chatUser?.isAdmin ? <UserCard userInfo={chatObj} chatUser={chatUser} /> : <UserCard userInfo={chatObj} chatUser={chatUser} /> }
                        </li>
                    ))}
                </ul>
            </main>
        </HomeSection>
    )
}