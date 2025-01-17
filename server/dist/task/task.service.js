"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const task_entity_1 = require("./entities/task.entity");
const typeorm_2 = require("@nestjs/typeorm");
let TaskService = class TaskService {
    constructor(taskRepository) {
        this.taskRepository = taskRepository;
    }
    async create(createTaskDto, id) {
        const isExist = await this.taskRepository.findBy({
            user: { id },
            title: createTaskDto.title
        });
        if (isExist.length)
            throw new common_1.BadRequestException('This task already exist!');
        const newTask = {
            title: createTaskDto.title,
            text: createTaskDto.text,
            user: {
                id,
            }
        };
        return await this.taskRepository.save(newTask);
    }
    findAll(id) {
        return this.taskRepository.find({
            where: {
                user: { id }
            },
        });
    }
    async findOne(id) {
        const task = await this.taskRepository.findOne({
            where: { id },
            relations: { user: true }
        });
        if (!task)
            throw new common_1.NotFoundException('Task not found!');
        return task;
    }
    async update(id, updateTaskDto) {
        const task = await this.taskRepository.findOne({
            where: { id },
        });
        if (!task)
            throw new common_1.NotFoundException('Task not found!');
        return await this.taskRepository.update(id, updateTaskDto);
    }
    async remove(id) {
        const task = await this.taskRepository.findOne({
            where: { id },
        });
        if (!task)
            throw new common_1.NotFoundException('Task not found!');
        return await this.taskRepository.delete(id);
    }
};
exports.TaskService = TaskService;
exports.TaskService = TaskService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(task_entity_1.Task)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], TaskService);
//# sourceMappingURL=task.service.js.map