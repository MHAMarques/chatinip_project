import { IUserRespose } from "../../interfaces"

type ChatHomeProps = {
    chatUser: IUserRespose | void;
}

export const ChatHome = ({chatUser}: ChatHomeProps) => {
    //
    return(
        <>
        <h1>Este é seu ambiente Chatinip</h1>
        <hr />
        <p> {chatUser?.name}</p>
        </>
    )
}