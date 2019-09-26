import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WageTier } from '@suite/entities';

@Injectable()
export class WageTiersService extends TypeOrmCrudService<WageTier> {
  constructor(
    @InjectRepository(WageTier) repo: Repository<WageTier>
  ) {
    super(repo)
  }
}
