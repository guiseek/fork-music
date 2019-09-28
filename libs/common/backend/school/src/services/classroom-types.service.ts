import { Injectable } from '@nestjs/common';
import { ClassroomType } from '@suite/entities';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ClassroomTypesService extends TypeOrmCrudService<ClassroomType> {
  constructor(
    @InjectRepository(ClassroomType) repo: Repository<ClassroomType>
  ) {
    super(repo)
  }}
