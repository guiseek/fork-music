import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { InGroup } from '@suite/entities';

@Injectable()
export class InGroupService extends TypeOrmCrudService<InGroup> {
  constructor(
    @InjectRepository(InGroup) repo: Repository<InGroup>
  ) {
    super(repo)
  }
}

