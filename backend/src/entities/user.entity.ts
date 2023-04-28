import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, BeforeInsert, BeforeUpdate, OneToMany } from "typeorm";
import { hashSync } from "bcrypt";

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

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;
}

export {User};
