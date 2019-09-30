import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Offer } from '@suite/entities';

@Injectable()
export class OfferService extends TypeOrmCrudService<Offer> {
  constructor(
    @InjectRepository(Offer) repo: Repository<Offer>
  ) {
    super(repo)
  }
}

