import { Module } from '@nestjs/common';
import { EmployessService } from './employess.service';
import { EmployeesController } from './controllers/employees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Employee } from '@suite/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Employee])],
  providers: [EmployessService],
  exports: [EmployessService],
  controllers: [EmployeesController],
})
export class EmployeesModule {}
