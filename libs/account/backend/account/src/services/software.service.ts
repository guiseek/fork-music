import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Software } from '@suite/entities';

@Injectable()
export class SoftwareService extends TypeOrmCrudService<Software> {
  constructor(
    @InjectRepository(Software) repo: Repository<Software>
  ) {
    super(repo)
  }
}

