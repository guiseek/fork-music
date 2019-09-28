import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ContactPersonStudent } from './contact-person-student.entity';


@Entity('contact_person_type')
export class ContactPersonType {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id'
  })
  id: number;

  @Column('varchar', {
    nullable: false,
    length: 128,
    name: 'type_name'
  })
  typeName: string;

  @OneToMany(() => ContactPersonStudent, contact_person_student => contact_person_student.contactPersonType, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  contactPersonStudents: ContactPersonStudent[];
}
