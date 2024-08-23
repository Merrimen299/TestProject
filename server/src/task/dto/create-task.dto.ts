import {IsNotEmpty, IsOptional} from "class-validator";
import {User} from "../../user/entities/user.entity";

export class CreateTaskDto {
    @IsNotEmpty()
    title: string;
    @IsNotEmpty()
    text: string;
    @IsOptional()
    user?: User
}
