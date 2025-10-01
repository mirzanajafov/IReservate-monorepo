import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Tenant } from './entities/tenant.entity';
import { User } from './entities/user.entity';

@Module({
   imports: [TypeOrmModule.forFeature([Tenant, User])],
   exports: [TypeOrmModule],
})
export class TenancyModule {}
