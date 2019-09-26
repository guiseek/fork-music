import { Controller } from '@nestjs/common';
import { CrudController, Crud } from '@nestjsx/crud';
import { Employee } from '@suite/entities';
import { EmployessService } from '../employess.service';

@Crud({
  model: {
    type: Employee
  }
})
@Controller('employees')
export class EmployeesController implements CrudController<Employee> {
  constructor(
    public service: EmployessService
  ) { }
}

