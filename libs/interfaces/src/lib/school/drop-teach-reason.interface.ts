import { ITeach } from './teach.interface';

/**
 * Contém um conjunto de explicações possíveis para
 * o motivo pelo qual o instrutor terminou o ensino antes da data final.
 * Existe apenas um atributo obrigatório:
 * @param reason_text. Isso pode ser “doença”, “movido para outro projeto / trabalho”, “sair” ou “outro motivo”.
 */
export interface IDropTeachReason {
  id: number;
  reasonText: string;
  teachs: | ITeach[] | {};
}
