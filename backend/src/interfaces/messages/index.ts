import { IUserMessenger } from "../users"

export interface IMessageRequest {
    message: string
    direct: boolean
    receiver: string
}


export interface IMessageResponse {
    updatedAt: Date
    createdAt: Date
    receiver: string
    direct: boolean
    message: string
    id: string
    user: IUserMessenger
}


export interface IMessageUpdate {
    message?: string
}