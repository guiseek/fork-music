import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserGroup } from '@suite/entities';

@Injectable()
export class UserGroupService extends TypeOrmCrudService<UserGroup> {
  constructor(
    @InjectRepository(UserGroup) repo: Repository<UserGroup>
  ) {
    super(repo)
  }
}

