import { NavigateFunction } from "react-router-dom";

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

export interface IUser {
    id: string;
    name: string
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

export interface IContext {
    navigate: NavigateFunction;
    token: string | null;
    userSignIn: (data: IUserLogin) => void;
    userSignUp: (data: IUserRequest) => void;
    userProfile: () => void;
    userMessages: () => void;
}

export interface IContextProps {
    children: React.ReactNode;
}

