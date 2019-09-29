import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PlanHistory } from '@suite/entities';

@Injectable()
export class PlanHistoryService extends TypeOrmCrudService<PlanHistory> {
  constructor(
    @InjectRepository(PlanHistory) repo: Repository<PlanHistory>
  ) {
    super(repo)
  }
}

