import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Student, StudentPresence } from '@suite/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StudentsService extends TypeOrmCrudService<Student> {
  constructor(
    @InjectRepository(Student) repo: Repository<Student>,
    @InjectRepository(StudentPresence) repoPresence: Repository<StudentPresence>
  ) {
    super(repo)
  }
}

