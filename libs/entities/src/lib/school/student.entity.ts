import { Entity, PrimaryGeneratedColumn, Column, Index, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { Category } from './category.entity';
import { Attend } from './attend.entity';
import { StudentPresence } from './student-presence.entity';
import { ContactPersonStudent } from './contact-person-student.entity';

/**
 * A tabela do aluno, mostrada acima, é usada para armazenar dados básicos sobre os alunos,
 * mas pode ser expandida de acordo com necessidades específicas.
 * Com exceção dos três atributos de contato, todos os atributos na tabela são necessários:
 * 
 * @param firstName - o nome do aluno
 * @param lastName - o sobrenome do aluno
 * @param birthDate - a data de nascimento do aluno
 * @param contactPhone - o número de telefone do aluno
 * @param contactMobile - o número de celular do aluno
 * @param contactMail - o endereço de email do aluno
 * @param category - é uma referência ao catálogo de categorias.
 * 
 * Com essa estrutura, estamos limitados a apenas uma categoria por aluno.
 * Isso funciona na maioria dos casos, mas em algumas situações podemos precisar de espaço para listar várias categorias.
 * Como você pode ver, adicionar uma relação muitos-para-muitos que conecta a tabela do aluno ao dicionário de categorias resolve esse problema.
 * Nesse cenário, porém, precisaremos escrever consultas um pouco mais complexas para manipular nossos dados.
 */
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
