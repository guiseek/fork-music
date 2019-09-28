import { IClassroomType } from './classroom-type.interface';

export interface IClassroom {
  id?: number;
  classroomType: IClassroomType | null;
  name: string;
  description: string;
  startDate: Date;
  endDate?: Date | null;
  completed?: boolean;
  // attends?: Attend[];
  // classroomSchedules: ClassroomSchedule[];
  // teachs: Teach[];
}
