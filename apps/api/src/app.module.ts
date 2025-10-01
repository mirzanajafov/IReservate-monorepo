import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisProvider } from './redis.provider';
import { TenancyModule } from './modules/tenancy/tenancy.modul';

@Module({
   imports: [
      TypeOrmModule.forRoot({
         type: 'postgres',
         host: 'localhost',
         port: 5432,
         username: 'ireserve',
         password: 'ireserve',
         database: 'ireservate',
         autoLoadEntities: true,
         synchronize: true,
      }),
      TenancyModule,
   ],
   controllers: [AppController],
   providers: [AppService, RedisProvider],
   exports: [RedisProvider],
})
export class AppModule {}
