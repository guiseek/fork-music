import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserGroupType } from '@suite/entities';

@Injectable()
export class UserGroupTypeService extends TypeOrmCrudService<UserGroupType> {
  constructor(
    @InjectRepository(UserGroupType) repo: Repository<UserGroupType>
  ) {
    super(repo)
  }
}

