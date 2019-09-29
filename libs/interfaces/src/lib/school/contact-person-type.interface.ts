import { IContactPersonStudent } from './contact-person-student.interface';

/**
 * @param typeName = representa o grau parentesco do aluno.
 * Único atributo obrigatório: `typeName`.
 * Exemplos de valores armazenados nesta tabela são:
 * "mãe", "pai", "irmão", "irmã" ou "tio".
 */
export interface IContactPersonType {
  id: number;
  typeName: string;
  contactPersonStudents: IContactPersonStudent[] | {};
}
