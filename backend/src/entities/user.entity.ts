import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";
import { Message } from "./message.entity";

@Entity('users')
class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length:100 })
    name: string;

    @Column({ length:100, unique: true })
    email: string;

    @Column({length: 120,})
    password: string;

    @Column({default: false})
    isAdmin: boolean;

    @Column({default: false})
    isActive: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToMany(() => Message, (Message) => Message.user, { cascade: true})
    messages: Message[];
}

export {User};
