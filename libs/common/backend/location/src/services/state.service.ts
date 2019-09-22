import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { State } from '@suite/entities';
import { Repository, FindOneOptions } from 'typeorm';

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(State)
    private readonly repo: Repository<State>
  ) { }
  findAll() {
    return this.repo.find()
  }
  findOne(id: number, withCities = false) {
    const options: FindOneOptions = {
      where: { id }
    }
    if (withCities) {
      options.relations = ['cities']
    }
    return this.repo.findOne(options)
  }
  find(q: string) {
    let qb = this.repo.createQueryBuilder('state')
    qb = qb.where('state.acronym like :q or state.name like :q', {
      q: `%${q}%`,
      id: +q
    })
    return qb.getMany()
  }
}
