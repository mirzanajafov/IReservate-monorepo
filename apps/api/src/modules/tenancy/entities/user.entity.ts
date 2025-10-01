import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Tenant } from './tenant.entity';

@Entity('users')
export class User {
   @PrimaryGeneratedColumn('uuid')
   id: string;

   @Column()
   email: string;

   @Column()
   passwordHash: string;

   @Column()
   role: 'owner' | 'staff' | 'customer';

   @ManyToOne(() => Tenant, (tenant) => tenant.users)
   tenant: Tenant;

   @CreateDateColumn()
   createdAt: Date;

   @UpdateDateColumn()
   updatedAt: Date;
}
