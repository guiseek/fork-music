import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subscription } from '@suite/entities';

@Injectable()
export class SubscriptionService extends TypeOrmCrudService<Subscription> {
  constructor(
    @InjectRepository(Subscription) repo: Repository<Subscription>
  ) {
    super(repo)
  }
}


