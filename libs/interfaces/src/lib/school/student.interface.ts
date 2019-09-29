import { ICategory } from './category.interface';
import { IAttend } from './attend.interface';
import { IContactPersonStudent } from './contact-person-student.interface';
import { IStudentPresence } from './student-presence.interface';

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
export interface IStudent {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  category: ICategory;
  contactPhone?: string;
  contactMobile?: string;
  contactMail?: string;
  attends?: IAttend[] | {};
  contactPersonStudents?: IContactPersonStudent[] | {};
  studentPresences?: IStudentPresence[] | {};
}
