import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OptionIncluded } from '@suite/entities';

@Injectable()
export class OptionIncludedService extends TypeOrmCrudService<OptionIncluded> {
  constructor(
    @InjectRepository(OptionIncluded) repo: Repository<OptionIncluded>
  ) {
    super(repo)
  }
}

