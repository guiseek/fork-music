import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Include } from '@suite/entities';

@Injectable()
export class IncludeService extends TypeOrmCrudService<Include> {
  constructor(
    @InjectRepository(Include) repo: Repository<Include>
  ) {
    super(repo)
  }
}

