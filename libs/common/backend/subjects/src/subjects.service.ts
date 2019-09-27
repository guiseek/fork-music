import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Subject } from '@suite/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class SubjectsService extends TypeOrmCrudService<Subject> {
  constructor(
    @InjectRepository(Subject) repo: Repository<Subject>
  ) {
    super(repo)
  }
}
