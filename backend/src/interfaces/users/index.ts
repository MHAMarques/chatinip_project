
export interface IUserRequest {
    name: string
    email: string
    password: string
    isAdmin: boolean
    isActive: boolean
}


export interface IUser {
    updatedAt: Date
    createdAt: Date
    isActive: boolean
    isAdmin: boolean
    email: string
    name: string
    id: string
}

export interface IUserMessenger {
    createdAt: Date
    name: string
    id: string
}

export interface IUserLogin {
    email: string
    password: string
}

export interface IUserUpdate {
    name?: string
    email?: string
    password?: string
}

export interface IUserActivation {
    isActive: boolean
}

export interface IUserToken {
    id: string,
    isAdmin: boolean
}