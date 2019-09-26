import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from 'auth/backend/auth';
import { UsersModule } from 'auth/backend/users';
import { database } from '../environments/environment';
import { LocationModule } from 'backend/location';
import { AddressModule } from 'backend/address';
import { WageTiersModule } from 'backend/wage-tiers';

// ticket-system
@Module({
  imports: [
    TypeOrmModule.forRoot(database),
    AuthModule,
    UsersModule,
    AddressModule,
    LocationModule,
    WageTiersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
