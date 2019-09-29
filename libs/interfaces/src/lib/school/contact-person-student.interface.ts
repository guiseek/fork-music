import { IContactPerson } from './contact-person.interface';
import { IContactPersonType } from './contact-person-type.interface';
import { IStudent } from './student.interface';

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
export interface IContactPersonStudent {
  id: number;
  contactPerson: IContactPerson;
  student: IStudent;
  contactPersonType: IContactPersonType;
}
