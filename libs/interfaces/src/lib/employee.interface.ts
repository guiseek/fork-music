import { IWageTier } from './wage-tier.interface';
import { EmployeeWageType } from './enums/employee-wage-type.enum';
import { EmployeeStatus } from './enums';

export interface IEmployee {
  id: number;
  employeeType: string | null;
  includeAsTeacher: number | null;
  firstName: string;
  lastName: string;
  email: string;
  mobilePhone: string | null;
  homePhone: string | null;
  birthDate: string | null;
  hireDate: Date;
  additionalNotes: string | null;
  status: EmployeeStatus | null;
  wageType: EmployeeWageType | null;
  employeeWage: number | null;
  wageTier: IWageTier | null;
}
