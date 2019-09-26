import { ICity } from './city.interface';

export interface IState {
  id: number
  acronym: string
  name: string
  cities?: ICity[]
}