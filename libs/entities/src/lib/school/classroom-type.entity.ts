import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Classroom } from './classroom.entity';
import { IsNotEmpty, MaxLength } from 'class-validator';

/**
 * Tabela destinada a armazenar informações básicas sobre as palestras ou aulas oferecidas aos alunos.
 * Pode conter valores como:
 * - "idioma inglês (grupo)"
 * - "idioma polonês (grupo)"
 * - "idioma croata (grupo)"
 * - "idioma inglês (pessoalmente)"
 * - "aulas de dança".
 */
@Entity('classroom_type')
export class ClassroomType {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id'
  })
  id: number;

  @IsNotEmpty({ message: 'Tipo de classe obrigatório' })
  @MaxLength(128, { message: 'Máximo de 128 caracteres' })
  @Column({
    type: 'varchar',
    nullable: false,
    length: 128,
    name: 'name'
  })
  name: string;

  @IsNotEmpty({ message: 'Descrição de classe obrigatório' })
  @MaxLength(512, { message: 'Máximo de 512 caracteres' })
  @Column({
    type: 'varchar',
    nullable: false,
    length: 512,
    name: 'description'
  })
  description: string;

  @OneToMany(() => Classroom, classroom => classroom.classroomType, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  classrooms: Classroom[];

}
