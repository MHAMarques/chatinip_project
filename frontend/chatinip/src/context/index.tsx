import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { IUserLogin, IUserRequest, IContextProps, IContext } from "../interfaces";
import { api } from "../service";
import { toast } from "react-toastify";

export const WebContext = createContext<IContext>({} as IContext);

export const Provider = ({ children }: IContextProps) => {
    const token = localStorage.getItem("chatinip:Token");
    const navigate = useNavigate();

    const userSignIn = async (data: IUserLogin): Promise<void> => {
        const logUser = await api
        .post('/login/', data)
        .then((res) => res.data)
        .catch((err => {
            console.log("ERRO: ",err.message)
            return false
        }))
        if(logUser){
            localStorage.setItem("chatinip:Token", logUser.token);
            toast.success("Acesso garantido");
            setTimeout(() => navigate('/chat'), 500);
        } 
        else{
            toast.error("Informações incorretas");
        }
    }

    const userSignUp = async (data: IUserRequest): Promise<void> => {
        const newUser = await api
        .post('/users/', data)
        .then((res) => res.data)
        .catch((err => {
            console.log("ERRO: ",err.message)
            toast.error(err.message);
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
            toast.error(err.message);
            return false
        }))
        return getUser
    }

    const userMessages = async (): Promise<void> => {
        api.defaults.headers.authorization = `Bearer ${token}`;
        const getUser = await api
        .get('/messages/')
        .then((res) => res.data)
        .catch((err => {
            console.log("ERRO: ",err.message)
            toast.error(err.message);
            return false
        }))
        return getUser
    }

    return (
        <WebContext.Provider value={{
            navigate,
            token,
            userSignIn,
            userSignUp,
            userProfile,
            userMessages,
            }}>
            {children}
        </WebContext.Provider>
    );
};