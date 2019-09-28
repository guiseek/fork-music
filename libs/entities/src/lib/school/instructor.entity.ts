import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { InstructorPresence } from './instructor-presence.entity';
import { Teach } from './teach.entity';


@Entity('instructor')
export class Instructor {
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
    type: 'varchar',
    nullable: true,
    length: 64,
    name: 'title'
  })
  title: string | null;

  @Column({
    type: 'date',
    nullable: false,
    name: 'birth_date'
  })
  birthDate: string;

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
    length: 128,
    name: 'contact_mail'
  })
  contactMail: string | null;

  @OneToMany(() => InstructorPresence, instructor_presence => instructor_presence.instructor, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  instructorPresences: InstructorPresence[];

  @OneToMany(() => Teach, teach => teach.instructor, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  teachs: Teach[];
}
