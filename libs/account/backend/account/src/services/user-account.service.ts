import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserAccount } from '@suite/entities';

@Injectable()
export class UserAccountService extends TypeOrmCrudService<UserAccount> {
  constructor(
    @InjectRepository(UserAccount) repo: Repository<UserAccount>
  ) {
    super(repo)
  }
}

