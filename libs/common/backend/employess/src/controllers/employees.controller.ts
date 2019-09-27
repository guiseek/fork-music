import { Controller } from '@nestjs/common';
import { CrudController, Crud, Override, ParsedRequest, CrudRequest, ParsedBody } from '@nestjsx/crud';
import { Employee } from '@suite/entities';
import { CreateEmployeeDto } from '../dto';
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
  get base(): CrudController<CreateEmployeeDto> {
    return this;
  }

  @Override()
  createOne(
    @ParsedRequest() req: CrudRequest,
    @ParsedBody() dto: CreateEmployeeDto,
  ) {
    return this.base.createOneBase(req, dto);
  }
}

