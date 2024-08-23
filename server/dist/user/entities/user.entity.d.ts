import { Task } from "../../task/entities/task.entity";
export declare class User {
    id: number;
    email: string;
    password: string;
    tasks: Task[];
    createdDate: Date;
    updateDate: Date;
}
