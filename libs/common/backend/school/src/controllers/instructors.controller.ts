import { Controller } from '@nestjs/common';
import { Instructor } from '@suite/entities';
import { CrudController, Crud } from '@nestjsx/crud';
import { InstructorsService } from '../services/instructors.service';

@Crud({
  model: {
    type: Instructor
  }
})

@Controller('school/instructors')
export class InstructorsController implements CrudController<Instructor> {
  constructor(
    public service: InstructorsService
  ) { }
}
