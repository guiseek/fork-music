import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Option } from '@suite/entities';

@Injectable()
export class OptionService extends TypeOrmCrudService<Option> {
  constructor(
    @InjectRepository(Option) repo: Repository<Option>
  ) {
    super(repo)
  }
}

