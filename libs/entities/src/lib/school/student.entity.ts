import { Entity, PrimaryGeneratedColumn, Column, Index, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Category } from './category.entity';
import { Attend } from './attend.entity';
import { StudentPresence } from './student-presence.entity';
import { ContactPersonStudent } from './contact-person-student.entity';

@Entity('student')
@Index('student_category', ['category'])
export class Student {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id'
  })
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 128,
    name: 'first_name'
  })
  firstName: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 128,
    name: 'last_name'
  })
  lastName: string;

  @Column({
    type: 'date',
    nullable: false,
    name: 'birth_date'
  })
  birthDate: string;

  @ManyToOne(type => Category, category => category.students, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  @JoinColumn({ name: 'category_id' })
  category: Category | null;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 128,
    name: 'contact_phone'
  })
  contactPhone: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 128,
    name: 'contact_mobile'
  })
  contactMobile: string | null;

  @Column({
    type: 'varchar',
    nullable: true,
    length: 256,
    name: 'contact_mail'
  })
  contactMail: string | null;

  @OneToMany(type => Attend, attend => attend.student, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  attends: Attend[];

  @OneToMany(type => ContactPersonStudent, contact_person_student => contact_person_student.student, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  contactPersonStudents: ContactPersonStudent[];

  @OneToMany(type => StudentPresence, student_presence => student_presence.student, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  studentPresences: StudentPresence[];
}
