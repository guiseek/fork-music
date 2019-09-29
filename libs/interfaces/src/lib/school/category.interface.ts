import { IStudent } from './student.interface';

export interface ICategory {
  id: number;
  name: string;
  students?: IStudent[];
}
