import { useForm } from "react-hook-form";
import { useContext } from "react";
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

    const { register, handleSubmit, reset } = useForm<ISendMessage>({ resolver: yupResolver(yupSchema) })
    const { sendMessage } = useContext(WebContext);
    const messageSent = (data: ISendMessage) => {
        sendMessage(data);
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