import { OutcomeText } from '../enums';

/**
 * A tabela teach_outcome descreve o sucesso do instrutor em um curso específico.
 * O outcome_text é o único atributo da tabela e é obrigatório.
 * Os valores possíveis para esta tabela podem ser:“em andamento”, “concluído com êxito”, “concluído parcialmente” e “não concluiu a aula”.
 */
export interface ITeachOutcome {
  id: number;

  /**
   * @param outcomeText
   * @typeparam outcomeText é um enum do tipo `OutcomeText`.
   * @returns Retorna enum `OutcomeText` ou `string`
   */
  outcomeText: OutcomeText | string;
}
