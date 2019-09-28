import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Instructor, InstructorPresence } from '@suite/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class InstructorsService extends TypeOrmCrudService<Instructor> {
  constructor(
    @InjectRepository(Instructor) repo: Repository<Instructor>,
    @InjectRepository(InstructorPresence) repoPresence: Repository<InstructorPresence>
  ) {
    super(repo)
  }
}

