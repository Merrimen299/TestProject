import ex = CSS.ex;

export interface IUser{
    id: number
    email: string
    token: string
}

export interface IUserData {
    email: string,
    password: string
}

export interface IResponseUser{
    email: string
    password: string
    id: number
    createdAt: string
    updatedAt: string
}

export interface IResponseUserData{
    token: string
    user: IResponseUser
}

export interface ITask{
    title: string
    id: number
    text: string
    status: string
    createdDate: string
    updateDate: string
}