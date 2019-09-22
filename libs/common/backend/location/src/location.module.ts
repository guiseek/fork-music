import { Module } from '@nestjs/common';
import { LocationService } from './location.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { State, City } from '@suite/entities';
import { StateService } from './services/state.service';
import { CityService } from './services/city.service';
import { LocationController } from './controllers/location.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([State, City])
  ],
  providers: [
    LocationService,
    StateService,
    CityService
  ],
  exports: [LocationService],
  controllers: [LocationController],
})
export class LocationModule {}
