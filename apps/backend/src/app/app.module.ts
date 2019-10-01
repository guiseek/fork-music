import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { database } from '../environments/environment';
import { AddressModule } from 'backend/address';
import { SchoolModule } from 'backend/school';
import { AuthModule } from 'backend/auth';
import { AccountModule } from 'backend/account';



// ticket-system
@Module({
  imports: [
    TypeOrmModule.forRoot(database),
    AddressModule,
    AuthModule,
    AccountModule,
    SchoolModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
