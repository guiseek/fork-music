import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Address } from '@suite/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AddressService extends TypeOrmCrudService<Address> {
  constructor(
    @InjectRepository(Address) repo: Repository<Address>
  ) {
    super(repo)
  }
}
