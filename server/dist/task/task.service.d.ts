import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { Repository } from "typeorm";
import { Task } from "./entities/task.entity";
export declare class TaskService {
    private readonly taskRepository;
    constructor(taskRepository: Repository<Task>);
    create(createTaskDto: CreateTaskDto, id: number): Promise<{
        title: string;
        text: string;
        user: {
            id: number;
        };
    } & Task>;
    findAll(id: number): Promise<Task[]>;
    findOne(id: number): Promise<Task>;
    update(id: number, updateTaskDto: UpdateTaskDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
