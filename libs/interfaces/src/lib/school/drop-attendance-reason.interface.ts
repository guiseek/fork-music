import { IAttend } from './attend.interface';

/**
 * Contém os vários motivos pelos quais um aluno pode abandonar um curso.
 * Ele possui apenas um atributo, reason_text, e é obrigatório.
 * Um exemplo de conjunto de valores pode incluir: “doença”, “perda de interesse”, “não tem tempo suficiente” e “outras razões”.
 */
export interface IDropAttendanceReason {
  id: number;
  reasonText: string;
  attends: IAttend[] | {};
}
