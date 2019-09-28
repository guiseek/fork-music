import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ClassroomSchedule } from '@suite/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClassroomSchedulesService extends TypeOrmCrudService<ClassroomSchedule> {
  constructor(
    @InjectRepository(ClassroomSchedule) repo: Repository<ClassroomSchedule>,
  ) {
    super(repo)
  }}
