import socket from "../../socket";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";
import { WebContext } from "../../context";
import { ISendMessage } from "../../interfaces"

type MessageFormProps = {
    receiverId: string | null | undefined;
    direct: boolean;
}


export const MessageForm = ({receiverId, direct}: MessageFormProps) => {
    const yupSchema = yup.object().shape({
        message: yup.string().required(),
        direct: yup.string().required(),
        receiver: yup.string().required(),
    });
    
    const chatWindow = document.getElementById("chatWindow");
    const [lastet, setLatest] = useState<ISendMessage>();
    useEffect(() => {
        chatWindow?.scrollTo(0, chatWindow.scrollHeight+500);
    },[lastet, chatWindow]);
    
    const { register, handleSubmit, reset } = useForm<ISendMessage>({ resolver: yupResolver(yupSchema) });
    const [socketInstance] = useState(socket());
    const { sendMessage } = useContext(WebContext);
    const messageSent = (data: ISendMessage) => {
        sendMessage(data);
        setLatest(data);
        socketInstance.emit('message', data);
        reset();
    }
    return(
        <form onSubmit={handleSubmit(messageSent)}>
            <input type="hidden" {...register("receiver")} value={receiverId?receiverId:''} />
            <input type="hidden" {...register("direct")} value={direct?'1':'0'} />
            <input type="text" {...register("message")} placeholder='Mensagem' title='Preencha com uma mensagem para ser enviada' autoComplete="off" required />
            <button type="submit">Enviar</button>
        </form>
    )
}