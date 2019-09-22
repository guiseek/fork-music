import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { City } from '@suite/entities';
import { Repository, Like, FindManyOptions } from 'typeorm';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private readonly repo: Repository<City>
  ) { }
  findAll() {
    return this.repo.find()
  }
  findOne(id: number) {
    return this.repo.find({ id })
  }
  find(q: string = '') {
    return this.repo.find({
      name: Like(`%${q}%`)
    })
  }
  query(options: FindManyOptions<City>) {
    return this.repo.find(options)
  }
  // findByState(state: number) {
  //   return this.repo.find({
  //     state
  //   })
  // }
}
