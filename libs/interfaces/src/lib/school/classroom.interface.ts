import { IClassroomType } from './classroom-type.interface';
import { IClassroomSchedule } from './classroom-schedule.interface';
import { IAttend } from './attend.interface';
import { ITeach } from './teach.interface';

export interface IClassroom {
  id?: number;
  classroomType: IClassroomType | null;
  name: string;
  description: string;
  startDate: Date;
  endDate?: Date | null;
  completed?: boolean;
  attends?: IAttend[];
  classroomSchedules: IClassroomSchedule[];
  teachs: ITeach[];
}
