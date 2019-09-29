import { IStudent } from './student.interface';
import { IClassroomSchedule } from './classroom-schedule.interface';

/**
 * Armazena dados sobre a presença do aluno em uma aula específica.
 * Podemos assumir que, para cada aula, o instrutor notará a presença e / ou ausência de todos os alunos.
 * 
 * Os atributos na tabela são:
 * @param student - é uma referência à tabela de alunos
 * @param classroomSchedule - é uma referência à tabela classroom_schedule
 * @param present - é uma marcação booleana se o aluno está presente na palestra ou não
 * 
 * Poderíamos monitorar a presença dos alunos em uma turma específica com uma consulta
 * como a seguinte (supondo que @id_classroom contenha o ID da turma que queremos).
 */
export interface IStudentPresence {
  student: IStudent;
  classroomSchedule: IClassroomSchedule;
  present: boolean;
}
