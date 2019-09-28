import { Controller } from '@nestjs/common';
import { Student } from '@suite/entities';
import { CrudController, Crud } from '@nestjsx/crud';
import { StudentsService } from '../../services/students.service';

@Crud({
  model: {
    type: Student
  }
})

@Controller('school/students')
export class StudentsController implements CrudController<Student> {
  constructor(
    public service: StudentsService
  ) { }
}
