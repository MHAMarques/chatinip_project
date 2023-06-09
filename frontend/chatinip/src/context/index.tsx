import { createContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IUserLogin, IUserRequest, IContextProps, IContext, ISendMessage, INewChannel } from "../interfaces";
import { api } from "../service";
import { toast } from "react-toastify";

export const WebContext = createContext<IContext>({} as IContext);

export const Provider = ({ children }: IContextProps) => {
    const token = localStorage.getItem("chatinip:Token");
    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const queryChannel = queryParams.get('channel');

    const userSignIn = async (data: IUserLogin): Promise<void> => {
        const logUser = await api
        .post('/login/', data)
        .then((res) => res.data)
        .catch((err => {
            console.log("ERRO: ",err.response.data['message'])
            toast.error(err.response.data['message']);
            return false
        }))
        if(logUser){
            localStorage.setItem("chatinip:Token", logUser.token);
            toast.success("Informações corretas");
            navigate('/chat');
        }
    }

    const userSignUp = async (data: IUserRequest): Promise<void> => {
        const newUser = await api
        .post('/users/', data)
        .then((res) => res.data)
        .catch((err => {
            console.log("ERRO: ",err.message)
            toast.error(err.response.data['message']);
            return false
        }))
        if(newUser){
            toast.success("Usuário registrado!");
            setTimeout(() => navigate('/signin'), 500);
        }
    }

    const userProfile = async (): Promise<void> => {
        api.defaults.headers.authorization = `Bearer ${token}`;
        const getUser = await api
        .get('/users/profile')
        .then((res) => res.data)
        .catch((err => {
            localStorage.removeItem("chatinip:Token");
            toast.error("Token Invalido: ",err.response.data['message']);
            navigate('/');
            return false
        }))
        if(!getUser.isActive){
            toast.error("Conta bloqueada.");
            navigate('/');
        }
        return getUser
    }

    const getProfile = async (userId: string): Promise<void> => {
        api.defaults.headers.authorization = `Bearer ${token}`;
        const getUser = await api
        .get('/users/'+userId)
        .then((res) => res.data)
        .catch((err => {
            localStorage.removeItem("chatinip:Token");
            toast.error("User invalido", err.response.data['message']);
            return false
        }))
        return getUser
    }

    const activeUser = async (userId: string): Promise<void> => {
        api.defaults.headers.authorization = `Bearer ${token}`;
        const getUser = await api
        .patch('/users/activation/'+userId)
        .then((res) => res.data)
        .catch((err => {
            localStorage.removeItem("chatinip:Token");
            toast.error("User invalido", err.response.data['message']);
            return false
        }))
        return getUser
        if(getUser){
            toast.success('De/Activação realizada')
        }
    }

    const deleteUser = async (userId: string): Promise<void> => {
        api.defaults.headers.authorization = `Bearer ${token}`;
        const getUser = await api
        .delete('/users/'+userId)
        .then((res) => res.data)
        .catch((err => {
            localStorage.removeItem("chatinip:Token");
            toast.error("User invalido", err.response.data['message']);
            return false
        }))
        toast.success('Usuário removido');
        return getUser
    }

    const getUsers = async (): Promise<void> => {
        api.defaults.headers.authorization = `Bearer ${token}`;
        const getList = await api
        .get('/users/')
        .then((res) => res.data)
        .catch((err => {
            localStorage.removeItem("chatinip:Token");
            toast.error("User invalido", err.response.data['message']);
            return false
        }))
        return getList
    }

    const userMessages = async (): Promise<void> => {
        api.defaults.headers.authorization = `Bearer ${token}`;
        const getMessages = await api
        .get('/messages/')
        .then((res) => res.data)
        .catch((err => {
            console.log("ERRO: ",err.message)
            toast.error("Erro: ",err.response.data['message']);
            return false
        }))
        return getMessages
    }

    const channelMessages = async (): Promise<void> => {
        api.defaults.headers.authorization = `Bearer ${token}`;
        const getUser = await api
        .get('/messages/'+queryChannel)
        .then((res) => res.data)
        .catch((err => {
            console.log("ERRO: ",err.message)
            return false
        }))
        return getUser
    }

    const channelInfo = async (): Promise<void> => {
        api.defaults.headers.authorization = `Bearer ${token}`;
        const getUser = await api
        .get('/channels/'+queryChannel)
        .then((res) => res.data)
        .catch((err => {
            console.log("ERRO: ",err.message)
            return false
        }))
        return getUser
    }

    const newChannel = async (data: INewChannel): Promise<void> =>{
        const newChannel = await api
        .post('/channels/', data)
        .then((res) => res.data)
        .catch((err => {
            console.log("ERRO: ",err.message)
            toast.error("Problemas para criar canal: ",err.response.data['message']);
            return false
        }))
        if(newChannel){
            toast.success("Canal criado com sucesso");
        }
    }

    const userChannels = async (): Promise<void> => {
        api.defaults.headers.authorization = `Bearer ${token}`;
        const getChannels = await api
        .get('/channels/')
        .then((res) => res.data)
        .catch((err => {
            console.log("ERRO: ",err.message)
            return false
        }))
        return getChannels
    }

    const sendMessage = async (data: ISendMessage): Promise<void> => {
        data.direct == '1' ? data.direct = true : data.direct = false;
        api.defaults.headers.authorization = `Bearer ${token}`;
        await api
        .post('/messages/', data)
        .then((res) => res.data)
        .catch((err => {
            console.log("ERRO: ",err.message)
            toast.error("Mensagem cancelada: ",err.response.data['message']);
            return false
        }))
    }

    return (
        <WebContext.Provider value={{
            navigate,
            token,
            userSignIn,
            userSignUp,
            sendMessage,
            getProfile,
            activeUser,
            deleteUser,
            getUsers,
            userProfile,
            userMessages,
            newChannel,
            channelMessages,
            channelInfo,
            userChannels,
            }}>
            {children}
        </WebContext.Provider>
    );
};