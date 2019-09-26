import { Module } from '@nestjs/common';
import { AddressService } from './address.service';
import { AddressController } from './address.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address, State, City } from '@suite/entities';
import { CitiesController } from './cities.controller';
import { StatesController } from './states.controller';
import { StateService } from './state.service';
import { CityService } from './city.service';

@Module({
  imports: [TypeOrmModule.forFeature([Address, State, City])],
  providers: [AddressService, StateService, CityService],
  exports: [AddressService, StateService, CityService],
  controllers: [AddressController, CitiesController, StatesController],
})
export class AddressModule { }
