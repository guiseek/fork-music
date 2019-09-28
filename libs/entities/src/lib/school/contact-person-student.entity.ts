import { Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ContactPerson } from './contact-person.entity';
import { Student } from './student.entity';
import { ContactPersonType } from './contact-person-type.entity';

@Entity('contact_person_student')
@Index('parent_student_ak_1', ['contactPerson', 'student'], { unique: true })
@Index('parent_student_contact_person_type', ['contactPersonType'])
@Index('parent_student_student', ['student'])
export class ContactPersonStudent {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id'
  })
  id: number;

  @ManyToOne(() => ContactPerson, contact_person => contact_person.contactPersonStudents, { nullable: false, onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  @JoinColumn({ name: 'contact_person_id' })
  contactPerson: ContactPerson | null;

  @ManyToOne(() => Student, student => student.contactPersonStudents, { nullable: false, onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  @JoinColumn({ name: 'student_id' })
  student: Student | null;

  @ManyToOne(() => ContactPersonType, contact_person_type => contact_person_type.contactPersonStudents, { nullable: false, onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  @JoinColumn({ name: 'contact_person_type_id' })
  contactPersonType: ContactPersonType | null;
}
