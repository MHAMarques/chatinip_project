import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from "typeorm";

@Entity('channels')
class Channel {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ length:100, unique: true })
    name: string;
}

export {Channel};
