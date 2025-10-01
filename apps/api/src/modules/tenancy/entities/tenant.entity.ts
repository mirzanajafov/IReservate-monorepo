import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { User } from './user.entity';

@Entity('tenants')
export class Tenant {
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column({ unique: true })
   name: string;

   @Column({ nullable: true })
   description?: string;

   @OneToMany(() => User, (user) => user.tenant)
   users: User[];

   @CreateDateColumn()
   createdAt: Date;

   @UpdateDateColumn()
   updatedAt: Date;
}
