import { Controller, Get, Param } from '@nestjs/common';
import { StateService } from './state.service';

@Controller('states')
export class StatesController {
  constructor(
    private readonly state: StateService
  ) { }
  @Get('')
  findAllStates() {
    return this.state.findAll()
  }
  @Get(':id')
  findState(@Param('id') id: number) {
    return this.state.findOne(id)
  }
  @Get(':id/cities')
  findStateWithCities(@Param('id') id: number) {
    return this.state.findOne(id, true)
  }
}
