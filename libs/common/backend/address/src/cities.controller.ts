import { Controller, Get, Param, Query } from '@nestjs/common';
import { City } from '@suite/entities';
import { CityService } from './city.service';
import { FindManyOptions, Like } from 'typeorm';

@Controller('cities')
export class CitiesController {
  constructor(
    private readonly city: CityService
  ) { }
  @Get(':id')
  findCity(@Param('id') id: number) {
    return this.city.findOne(id)
  }
  @Get()
  query(@Query() query: any) {
    console.log(query)
    const options: FindManyOptions<City> = {}
    if (query.relations) {
      options.relations = query.relations.split(',')
    }
    if (query.name) {
      options.where = { name: Like(`%${query.name}%`) }
    }
    options.take = options.take ? options.take : 10
    return this.city.query(options)
  }
}
