import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { ContactPerson, ContactPersonStudent, ContactPersonType } from '@suite/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ContactPersonsService extends TypeOrmCrudService<ContactPerson> {
  constructor(
    @InjectRepository(ContactPerson) repo: Repository<ContactPerson>,
    @InjectRepository(ContactPersonStudent) repoStudent: Repository<ContactPersonStudent>,
    @InjectRepository(ContactPersonType) repoType: Repository<ContactPersonType>
  ) {
    super(repo)
  }
}

