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
        
        async function activatation(id: string){
            await activeUser(id);
            setTimeout(() => navigate('/chat'), 500);
        }
        async function deletion(id: string){
            await deleteUser(id);
            setTimeout(() => navigate('/chat'), 500);
        }
        
        if(queryActivation){
            activatation(queryActivation);            
        }
        else if(queryDelete){
            deletion(queryDelete);
        }

    },[queryActivation, queryDelete, navigate, activeUser, deleteUser])

    useEffect(() => {
        
        async function getUserList(){
            const responseList = await getUsers();
            setUserList(responseList);
        }
        
        getUserList();

    },[getUsers])

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