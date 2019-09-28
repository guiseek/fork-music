import { Attend } from './attend.entity';
import { AttendanceOutcome } from './attendance-outcome.entity';
import { Category } from './category.entity';
import { ClassroomSchedule } from './classroom-schedule.entity';
import { ClassroomType } from './classroom-type.entity';
import { Classroom } from './classroom.entity';
import { ContactPersonStudent } from './contact-person-student.entity';
import { ContactPersonType } from './contact-person-type.entity';
import { ContactPerson } from './contact-person.entity';
import { DropAttendanceReason } from './drop-attendance-reason.entity';
import { DropTeachReason } from './drop-teach-reason.entity';
import { InstructorPresence } from './instructor-presence.entity';
import { Instructor } from './instructor.entity';
import { StudentPresence } from './student-presence.entity';
import { Student } from './student.entity';
import { TeachOutcome } from './teach-outcome.entity';
import { Teach } from './teach.entity';

export const SCHOOL_ENTITIES = [Attend, AttendanceOutcome, Category, ClassroomSchedule, ClassroomType, Classroom, ContactPersonStudent, ContactPersonType, ContactPerson, DropAttendanceReason, DropTeachReason, InstructorPresence, Instructor, StudentPresence, Student, TeachOutcome, Teach]

export {
  Attend, AttendanceOutcome, Category, ClassroomSchedule, ClassroomType, Classroom, ContactPersonStudent, ContactPersonType, ContactPerson, DropAttendanceReason, DropTeachReason, InstructorPresence, Instructor, StudentPresence, Student, TeachOutcome, Teach
}