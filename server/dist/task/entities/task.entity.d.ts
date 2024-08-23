import { User } from "../../user/entities/user.entity";
export declare class Task {
    id: number;
    title: string;
    status: string;
    text: string;
    user: User;
    createdDate: Date;
    updateDate: Date;
}
