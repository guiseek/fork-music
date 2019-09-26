import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Employee } from '@suite/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class EmployessService extends TypeOrmCrudService<Employee> {
  constructor(
    @InjectRepository(Employee) repo: Repository<Employee>
  ) {
    super(repo)
  }
}
