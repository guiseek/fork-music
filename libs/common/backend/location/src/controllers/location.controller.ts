import { Controller, Get, Param, Query } from '@nestjs/common';
import { StateService } from '../services/state.service';
import { CityService } from '../services/city.service';
import { FindManyOptions, Like } from 'typeorm';
import { City } from '@suite/entities';

@Controller('location')
export class LocationController {
  constructor(
    private readonly state: StateService,
    private readonly city: CityService
  ) {}
  @Get('states')
  findAllStates() {
    return this.state.findAll()
  }
  @Get('states/:id')
  findState(@Param('id') id: number) {
    return this.state.findOne(id)
  }
  @Get('states/:id/cities')
  findStateWithCities(@Param('id') id: number) {
    return this.state.findOne(id, true)
  }
  @Get('cities')
  findAllCities(@Query() q: string) {
    return this.city.find(q)
  }
  @Get('cities/:id')
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
