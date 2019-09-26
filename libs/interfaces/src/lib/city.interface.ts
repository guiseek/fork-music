import { IState } from './state.interface';

export class ICity {
  id: number
  name: string
  latitude: number
  longitude: number
  capital: boolean
  state?: IState
}