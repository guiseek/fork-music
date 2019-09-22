import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { UserEntity } from './entities/user.entity';
import { UserController } from './controllers/user.controller';
import { User } from '@suite/entities';
import { UserService } from './services/user.service';
import { PassportModule } from '@nestjs/passport';
import { UserRepository } from './repositories';
import { UserSubscriberEntity } from './entities/user.subscriber-entity';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    TypeOrmModule.forFeature([User, UserRepository])
  ],
  providers: [UserService, UserSubscriberEntity],
  exports: [UserService],
  controllers: [UserController],
})
export class UsersModule {}
