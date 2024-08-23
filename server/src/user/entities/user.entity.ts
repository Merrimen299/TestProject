import {Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany} from "typeorm";
import {Task} from "../../task/entities/task.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn({name: 'user_id'})
    id: number;

    @Column({name: 'user_email'})
    email: string;

    @Column({name: 'user_password'})
    password: string;

    @OneToMany(() => Task, (task) => task.title, {
        onDelete: 'CASCADE',
    })
    tasks: Task[]

    @CreateDateColumn()
    createdDate: Date

    @UpdateDateColumn()
    updateDate: Date
}
