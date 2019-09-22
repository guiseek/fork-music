import { Connection, EntitySubscriberInterface, InsertEvent } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { UserService } from '../services/user.service';
import { User } from '@suite/entities';


@Injectable()
export class UserSubscriberEntity implements EntitySubscriberInterface<User> {
  constructor(
    @InjectConnection() connection: Connection,
    private readonly userService: UserService
  ) {
    connection.subscribers.push(this);
  }

  listenTo(): Function {
    return User;
  }

  public async beforeInsert(event: InsertEvent<User>): Promise<void> {
    const { hash: password, salt } = await this.userService.hashPassword(event.entity.password);
    event.entity.password = password;
    event.entity.salt = salt;
  }
}
