import { TaskService } from './task.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
export declare class TaskController {
    private readonly taskService;
    constructor(taskService: TaskService);
    create(createTaskDto: CreateTaskDto, req: any): Promise<{
        title: string;
        text: string;
        user: {
            id: number;
        };
    } & import("./entities/task.entity").Task>;
    findAll(req: any): Promise<import("./entities/task.entity").Task[]>;
    findOne(id: string): Promise<import("./entities/task.entity").Task>;
    update(id: string, updateTaskDto: UpdateTaskDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
