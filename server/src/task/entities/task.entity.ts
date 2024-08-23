import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryGeneratedColumn,
    UpdateDateColumn
} from "typeorm";
import {User} from "../../user/entities/user.entity";

@Entity()
export class Task {
    @PrimaryGeneratedColumn({name: 'task_id'})
    id: number;

    @Column({name: 'task_title'})
    title: string;

    @Column({name: 'task_status', default: 'Not set'})
    status: string;

    @Column({name: 'task_text', default: ''})
    text: string;

    @ManyToOne(() => User, (user) => user.tasks)
    @JoinColumn({name: 'user_id'})
    user: User

    @CreateDateColumn()
    createdDate: Date

    @UpdateDateColumn()
    updateDate: Date
}
