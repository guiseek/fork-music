import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WageTiersService } from './wage-tiers.service';
import { WageTiersController } from './wage-tiers.controller';
import { WageTier } from '@suite/entities';

@Module({
  imports: [TypeOrmModule.forFeature([WageTier])],
  providers: [WageTiersService],
  exports: [WageTiersService],
  controllers: [WageTiersController],
})
export class WageTiersModule {}
