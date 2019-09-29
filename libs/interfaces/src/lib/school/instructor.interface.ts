import { IInstructorPresence } from './instructor-presence.interface';
import { ITeach } from './teach.interface';

export interface IInstructor {
  id: number;
  firstName: string;
  lastName: string;
  title?: string | null;
  birthDate: string;
  contactPhone?: string | null;
  contactMobile?: string | null;
  contactMail?: string | null;
  instructorPresences?: IInstructorPresence[];
  teachs?: ITeach[];
}
