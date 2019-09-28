import { Injectable } from '@nestjs/common';
import { TypeOrmCrudService } from '@nestjsx/crud-typeorm';
import { Classroom } from '@suite/entities';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ClassroomsService extends TypeOrmCrudService<Classroom> {
  constructor(
    @InjectRepository(Classroom) repo: Repository<Classroom>,
  ) {
    super(repo)
  }
  // async getTypes(options) {
  //   // this.g
  //   const data = await this.repoType.find(options)
  //   const paged = this.re
  // }
  // saveType(data) {
  //   return this.repoType.save(data)
  // }
}

