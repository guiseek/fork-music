import { Controller } from '@nestjs/common';
import { Crud, CrudController } from '@nestjsx/crud';
import { ClassroomSchedule } from '@suite/entities';
import { ClassroomSchedulesService } from '../../services/classroom-schedules.service';

@Crud({
  model: {
    type: ClassroomSchedule
  }
})
@Controller('school/classroom-schedules')
export class ClassroomSchedulesController implements CrudController<ClassroomSchedule> {
  constructor(
    public service: ClassroomSchedulesService
  ) { }
}
