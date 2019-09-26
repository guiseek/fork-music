import { QueryFields, QueryFilter, QueryJoin, QuerySort } from './http-query.interfaces';

export interface HttpDatabaseParams {
  sort?: string
  page?: string | number
  per_page?: string | number
  [param: string]: string | string[] | number
}
export interface HttpQueryParams {
  fields?: QueryFields;
  filter?: QueryFilter[];
  or?: QueryFilter[];
  join?: QueryJoin[];
  sort?: QuerySort[] | QuerySort;
  limit?: number;
  offset?: number;
  page?: number;
  resetCache?: boolean;
}