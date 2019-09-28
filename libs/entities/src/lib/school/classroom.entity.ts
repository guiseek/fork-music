import { Column, Entity, Index, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { ClassroomType } from './classroom-type.entity';
import { Attend } from './attend.entity';
import { ClassroomSchedule } from './classroom-schedule.entity';
import { Teach } from './teach.entity';



/**
 * A tabela de classes é um catálogo que contém detalhes sobre todas as classes. Podemos ter várias instâncias de cada tipo de classe. Os atributos na tabela são os seguintes (todos são obrigatórios, exceto end_date):

class_type_id - é uma referência ao dicionário class_type.
nome - é um nome abreviado da classe.
description - essa descrição é mais específica que a da tabela class_type.
start_date - a data de início da turma.
end_date - a data final da turma. Não é obrigatório, pois nem sempre sabemos a data exata de término de cada aula com antecedência.
concluído - é um valor booleano que indica se todas as atividades de classe planejadas foram concluídas. Isso é útil quando atingimos o tempo final planejado para uma aula, mas outras atividades ainda precisam ser concluídas.
 */

@Entity('classroom')
@Index('classroom_classroom_type', ['classroomType'])
export class Classroom {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id'
  })
  id: number;

  @ManyToOne(type => ClassroomType, classroom_type => classroom_type.classrooms, { nullable: false, onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  @JoinColumn({ name: 'classroom_type_id' })
  classroomType: ClassroomType | null;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 128,
    name: 'name'
  })
  name: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 512,
    name: 'description'
  })
  description: string;

  @Column({
    type: 'datetime',
    nullable: false,
    name: 'start_date'
  })
  startDate: Date;

  @Column({
    type: 'datetime',
    nullable: true,
    name: 'end_date'
  })
  endDate: Date | null;

  @Column({
    type: 'tinyint',
    nullable: false,
    width: 1,
    name: 'completed'
  })
  completed: boolean;

  @OneToMany(type => Attend, attend => attend.classroom, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  attends: Attend[];

  @OneToMany(type => ClassroomSchedule, classroom_schedule => classroom_schedule.classroom, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  classroomSchedules: ClassroomSchedule[];

  @OneToMany(type => Teach, teach => teach.classroom, { onDelete: 'NO ACTION', onUpdate: 'NO ACTION' })
  teachs: Teach[];
}
