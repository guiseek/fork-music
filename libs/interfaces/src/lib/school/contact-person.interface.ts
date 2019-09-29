import { IContactPersonStudent } from './contact-person-student.interface';

/**
 * Na maioria dos casos, não precisamos armazenar informações de contato de emergência
 * Por exemplo: em caso de emergência, entre em contato com essa pessoa.
 * No entanto, isso muda quando ensinamos crianças.
 * Por lei ou por costume, precisamos ter uma pessoa de contato para cada criança que estamos ensinando.
 * Em nossas tabelas de modelos
 * - contact_person
 * - contact_person_type
 * - contact_person_student
 * Demonstramos como isso pode ser feito.
 */

/**
 * Lista de pessoas relacionadas aos alunos.
 * Obviamente, não precisamos listar todos os parentes; principalmente, teremos um ou dois contatos por aluno.
 * Essa é uma boa maneira de encontrar “para quem você vai ligar” quando o aluno precisar ou quiser sair mais cedo.
 *
 * Os atributos na tabela são:
 * @param firstName - é o nome da pessoa de contato
 * @param lastName - é o sobrenome da pessoa
 * @param contactPhone - é o número de telefone da pessoa
 * @param contactMobile - é o número de celular da pessoa
 * @param contactMail - é o endereço de email da pessoa
 *
 * Os detalhes de contato não são obrigatórios, embora sejam muito úteis.
 */
export interface IContactPerson {
  id: number;
  firstName: string;
  lastName: string;
  contactPhone?: string;
  contactMobile?: string;
  contactMail?: string;
  contactPersonStudents?: IContactPersonStudent[] | {};
}
