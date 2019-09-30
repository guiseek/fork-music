import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Plan } from '@suite/entities';

@Injectable()
export class PlanService extends TypeOrmCrudService<Plan> {
  constructor(
    @InjectRepository(Plan) repo: Repository<Plan>
  ) {
    super(repo)
  }
}

