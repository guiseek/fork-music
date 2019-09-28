import { Module } from '@nestjs/common';
import { SchoolService } from './school.service';
import { ClassroomsController } from './controllers/classrooms/classrooms.controller';
import { AttendsController } from './controllers/attends.controller';
import { TeachesController } from './controllers/teaches.controller';
import { InstructorsController } from './controllers/instructors.controller';
import { StudentsController } from './controllers/students/students.controller';
import { ContactPersonsController } from './controllers/students/contact-persons.controller';
import { ClassroomsService } from './services/classrooms.service';
import { StudentsService } from './services/students.service';
import { AttendsService } from './services/attends.service';
import { InstructorsService } from './services/instructors.service';
import { TeachesService } from './services/teaches.service';
import { ContactPersonsService } from './services/contact-persons.service';
import { CategoriesService } from './services/categories.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SCHOOL_ENTITIES } from '@suite/entities';
import { ClassroomTypesService } from './services/classroom-types.service';
import { ClassroomSchedulesService } from './services/classroom-schedules.service';
import { ClassroomTypesController } from './controllers/classrooms/classroom-types.controller';
import { ClassroomSchedulesController } from './controllers/classrooms/classroom-schedules.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ...SCHOOL_ENTITIES
    ])
  ],
  providers: [
    SchoolService,
    ClassroomsService,
    StudentsService,
    AttendsService,
    InstructorsService,
    TeachesService,
    ContactPersonsService,
    CategoriesService,
    ClassroomTypesService,
    ClassroomSchedulesService
  ],
  exports: [
    SchoolService,
    ClassroomsService,
    StudentsService,
    AttendsService,
    InstructorsService,
    TeachesService,
    ContactPersonsService,
    CategoriesService,
    ClassroomTypesService,
    ClassroomSchedulesService
  ],
  controllers: [
    ClassroomsController,
    AttendsController,
    TeachesController,
    InstructorsController,
    StudentsController,
    ContactPersonsController,
    ClassroomTypesController,
    ClassroomSchedulesController
  ],
})
export class SchoolModule {}
