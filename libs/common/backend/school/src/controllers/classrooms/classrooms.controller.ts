import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { Classroom } from '@suite/entities';
import { ClassroomsService } from '../../services/classrooms.service';
import { CrudController, Crud, Override, ParsedRequest, CrudRequest, ParsedBody } from '@nestjsx/crud';
import { CreateClassroomDto } from 'backend/school/dto';

@Crud({
  model: {
    type: Classroom
  }
})
@Controller('school/classrooms')
export class ClassroomsController implements CrudController<Classroom> {
  constructor(
    public service: ClassroomsService
  ) { }
  get base(): CrudController<CreateClassroomDto> {
    return this;
  }

  @Override()
  createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: CreateClassroomDto,
  ) {
    return this.base.createOneBase(req, dto);
  }
}

