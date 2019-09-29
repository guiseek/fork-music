import { OutcomeText } from './../enums/outcome-text.enum';
import { IAttend } from './attend.interface';

/**
 * Contém descrições sobre a atividade do aluno em um determinado curso.
 * O outcome_text é o único atributo na tabela e é obrigatório.
 * Um conjunto de valores possíveis é: "em andamento", "concluído com êxito", "concluído parcialmente" e "não concluiu a aula".
 */
export interface IAttendanceOutcome {
  id: number;
  /**
   * Um conjunto de valores possíveis é:
   * "em andamento", "concluído com êxito", "concluído parcialmente" e "não concluiu a aula".
   */
  outcomeText: OutcomeText;
  attends: IAttend[] | {};
}
