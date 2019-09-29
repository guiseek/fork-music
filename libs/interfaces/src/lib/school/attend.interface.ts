import { IClassroom } from './classroom.interface';
import { IStudent } from './student.interface';
import { IAttendanceOutcome } from './attendance-outcome.interface';
import { IDropAttendanceReason } from './drop-attendance-reason.interface';

/**
 * A tabela de participação armazena informações sobre qual aluno
 * participou de qual aula e o resultado final.
 */
/**
 * A tabela de participação armazena informações sobre qual aluno participou de qual aula e o resultado final.
 * Todos os dados, exceto class_drop_date e drop_class_reason_id, são necessários.
 * Esses dois serão preenchidos se e somente se um aluno abandonar a aula.
 * 
 * @param student_id - é uma referência à tabela de alunos
 * @param classroom_id - é uma referência à tabela de classes
 * @param classroom_enrollment_date - é a data em que o aluno começou a frequentar essa aula
 * @param classroom_drop_date - a data em que o aluno saiu da aula. Este atributo só terá valor se o aluno abandonar a turma antes da data de término da aula. Nesse caso, o valor do atributo drop_class_reason_id também deve ser definido.
 * @param drop_class_reason_id - é uma referência à tabela drop_classclassroom_reason
 * @param attendance_outcome_id - é uma referência à tabela attendance_outcome
 */
export interface IAttend {
    id: number;
    student: IStudent;
    classroom: IClassroom;
    /**
     * é a data em que o aluno começou a frequentar essa aula
     */
    classroomEnrollmentDate: string;
    /**
     * a data em que o aluno saiu da aula.
     * Este atributo só terá valor se o aluno abandonar a turma antes da data de término da aula.
     * Nesse caso, o valor do atributo drop_class_reason_id também deve ser definido.
     */
    classroomDropDate: string;
    dropClassroomReason: IDropAttendanceReason;
    attendanceOutcome: IAttendanceOutcome;
}
