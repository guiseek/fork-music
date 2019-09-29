import { IInstructor } from './instructor.interface';
import { IClassroomSchedule } from './classroom-schedule.interface';

export interface IInstructorPresence {
  instructor?: IInstructor | null;
  classroomSchedule: IClassroomSchedule | null;
  present: boolean;
}
