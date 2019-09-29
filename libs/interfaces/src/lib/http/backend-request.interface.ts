import { QueryFilter } from '@nestjsx/crud-request';

export interface BackendRequest {
  endpoint: string
  fields?: string[]
  filter?: QueryFilter,
  relations?: Array<any>
}