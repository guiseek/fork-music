import { Module } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Subject } from '@suite/entities';
import { SubjectsController } from './subjects.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Subject])],
  providers: [SubjectsService],
  exports: [SubjectsService],
  controllers: [SubjectsController]
})
export class SubjectsModule {}
