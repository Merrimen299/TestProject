import {IResponseUserData, IUser, IUserData} from "../types/types";
import {instanse} from "../axios/axios.api";

export const AuthService = {
    async registration(
        userData: IUserData
    ): Promise<IResponseUserData | undefined>{
      const {data} = await instanse.post<IUserData, {data: IResponseUserData}>('user', userData);
      return data
    },
    async login(userData: IUserData): Promise<IUser | undefined>{
        const {data} = await instanse.post<IUserData, {data: IUser}>('auth/login', userData);
        return data
    },
    async getProfile(): Promise<IUser | undefined>{
        const {data} = await instanse.get('auth/profile')
        if(data) return data
    },
}