import { IInstructorPresence } from './instructor-presence.interface';
import { IClassroom } from './classroom.interface';
import { IStudentPresence } from './student-presence.interface';

export interface IClassroomSchedule {
  id: number;
  classroom: IClassroom | null;
  startTime: Date;
  endTime?: Date;
  instructorPresences?: IInstructorPresence[];
  studentPresences?: IStudentPresence[];
}
