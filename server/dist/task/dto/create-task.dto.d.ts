import { User } from "../../user/entities/user.entity";
export declare class CreateTaskDto {
    title: string;
    text: string;
    user?: User;
}
