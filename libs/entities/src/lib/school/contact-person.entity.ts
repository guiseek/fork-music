import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ContactPersonStudent } from './contact-person-student.entity';


@Entity('contact_person')
export class ContactPerson {
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

  @OneToMany(() => ContactPersonStudent, contact_person_student => contact_person_student.contactPerson, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  contactPersonStudents: ContactPersonStudent[];
}
