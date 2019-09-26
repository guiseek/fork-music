import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WageTiersService } from './wage-tiers.service';
import { WageTiersController } from './wage-tiers.controller';
import { WageTier, Employee } from '@suite/entities';

@Module({
  imports: [TypeOrmModule.forFeature([WageTier, Employee])],
  providers: [WageTiersService],
  exports: [WageTiersService],
  controllers: [WageTiersController],
})
export class WageTiersModule {}
