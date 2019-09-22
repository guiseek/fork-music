import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from 'auth/backend/auth';
import { UsersModule } from 'auth/backend/users';
import { database } from '../environments/environment';
import { LocationModule } from 'backend/location';

// ticket-system
@Module({
  imports: [
    TypeOrmModule.forRoot(database),
    AuthModule,
    UsersModule,
    LocationModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
