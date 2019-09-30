import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Prerequisite } from '@suite/entities';

@Injectable()
export class PrerequisiteService extends TypeOrmCrudService<Prerequisite> {
  constructor(
    @InjectRepository(Prerequisite) repo: Repository<Prerequisite>
  ) {
    super(repo)
  }
}

