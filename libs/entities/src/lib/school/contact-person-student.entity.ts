import { Entity, Index, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ContactPerson } from './contact-person.entity';
import { Student } from './student.entity';
import { ContactPersonType } from './contact-person-type.entity';

/**
 * A tabela contact_person_student é uma relação muitos para muitos
 * que conecta pessoas de contato e seu tipo com os alunos.
 * 
 * Os atributos na tabela são (todos são obrigatórios):
 * @param contactPerson - é uma referência à tabela contact_person
 * @param student - é uma referência à tabela de alunos
 * @param contactPersonType - é uma referência à tabela contact_person_type
 * 
 * Vale a pena mencionar que essa relação muitos-para-muitos conecta três tabelas.
 * O par de atributos contact_person_id e student_id é usado como chave alternativa (UNIQUE).
 * Dessa forma, desativaremos as entradas duplicadas que conectam alunos individuais com a mesma pessoa de contato.
 * O atributo contact_person_type_id não faz parte da chave alternativa.
 * Nesse caso, poderíamos ter várias relações para a mesma pessoa de contato e o mesmo aluno (usando diferentes tipos de relacionamento),
 * e isso não faz sentido em situações da vida real.
 * 
 * O modelo apresentado neste artigo deve ser capaz de cobrir as necessidades mais comuns.
 * Ainda assim, algumas partes do modelo podem ser excluídas em alguns casos, por exemplo.
 * provavelmente não precisaríamos de todo o segmento de pessoas de contato se nossos alunos forem adultos.
 */
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
