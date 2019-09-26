export type QueryFields = string[];

export interface QueryFilter {
  field: string;
  operator: ComparisonOperator;
  value?: any;
}

export interface QueryJoin {
  field: string;
  select?: QueryFields;
}

export interface QuerySort {
  field: string;
  order: string | 'ASC' | 'DESC';
}

export type ComparisonOperator =
  | 'eq'
  | 'ne'
  | 'gt'
  | 'lt'
  | 'gte'
  | 'lte'
  | 'starts'
  | 'ends'
  | 'cont'
  | 'excl'
  | 'in'
  | 'notin'
  | 'isnull'
  | 'notnull'
  | 'between';