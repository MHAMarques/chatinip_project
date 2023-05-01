import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne } from "typeorm";
import { User } from "./user.entity";

@Entity('messages')
class Message {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    message: string;

    @Column({default: false})
    direct: boolean;

    @Column('uuid')
    receiver: string;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(() => User, (user: User) => user.messages, {onDelete: 'CASCADE'})
    user: User;

}

export {Message};
