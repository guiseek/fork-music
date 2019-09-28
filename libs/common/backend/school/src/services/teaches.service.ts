import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Teach, TeachOutcome, DropTeachReason } from '@suite/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TeachesService extends TypeOrmCrudService<Teach> {
  constructor(
    @InjectRepository(Teach) repo: Repository<Teach>,
    @InjectRepository(TeachOutcome) repoOutcome: Repository<TeachOutcome>,
    @InjectRepository(DropTeachReason) repoDrop: Repository<DropTeachReason>
  ) {
    super(repo)
  }
}

