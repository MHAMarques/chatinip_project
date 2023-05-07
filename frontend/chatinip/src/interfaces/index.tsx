import { NavigateFunction } from "react-router-dom";


export interface IUser {
    id: string;
    name: string
}

export interface IUserLogin {
    email: string;
    password: string;
}

export interface IUserRequest {
    name: string;
    email: string;
    password: string;
}

export interface IUserRespose {
    id: string;
    name: string;
    email: string;
    isAdmin: boolean;
    createdAt: Date;
    updatedAt: Date;
}

export interface IUserMessage {
    id: string;
    message: string;
    direct: boolean;
    receiver: string;
    createdAt: Date;
    updatedAt: Date;
    user: IUser;
}

export interface ISendMessage {
    message: string;
    direct: string | boolean;
    receiver: string;
}

export interface IUserChannels {
    id: string;
    name: string;
}

export interface IChatChannel {
    id: string;
    name: string;
}

export interface INewChannel {
    name: string;
}

export interface IContext {
    navigate: NavigateFunction;
    token: string | null;
    userSignIn: (data: IUserLogin) => void;
    userSignUp: (data: IUserRequest) => void;
    sendMessage: (data: ISendMessage) => void;
    getProfile: (userId: string) => void;
    userProfile: () => void;
    userMessages: () => void;
    newChannel: (data: INewChannel) => void;
    channelMessages: () => void;
    channelInfo: () => void;
    userChannels: () => void;
}

export interface IContextProps {
    children: React.ReactNode;
}

