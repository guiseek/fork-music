import { IInstructor } from './instructor.interface';
import { IDropTeachReason } from './drop-teach-reason.interface';
import { IClassroom } from './classroom.interface';
import { ITeachOutcome } from './teach-outcome.interface';

/**
 * A tabela de ensino é usada para armazenar informações sobre qual instrutor está ensinando qual classe.
 *
 * Os atributos na tabela são:
 * @param instructor_id - é uma referência à tabela de instrutores.
 * @param classroom_id - é uma referência à tabela de classes.
 * @param start_date - é a data em que o instrutor começou a trabalhar nessa classe.
 * @param end_date - é a data em que o instrutor parou de trabalhar nessa classe. Não é obrigatório, porque não podemos saber com antecedência se o instrutor ensinará até a data de término da aula.
 * @param drop_teach_reason_id - é uma referência à tabela drop_teach_reason. Não é obrigatório porque o instrutor não pode deixar a aula.
 * @param teach_outcome_id - é uma referência à tabela teach_outcome_reason.
 */
export interface ITeach {
  id: number;
  instructor?: IInstructor | null;
  classroom?: IClassroom | null;
  startDate: string;
  endDate: string | null;
  dropTeachReason?: IDropTeachReason | null;
  teachOutcome?: ITeachOutcome | null;
}
