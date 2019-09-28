import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Student } from './student.entity';

@Entity('category')
export class Category {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id'
  })
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 128,
    name: 'name'
  })
  name: string;

  @OneToMany(type => Student, student => student.category, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  students: Student[];
}
