import { IState } from './state.interface';
import { ICity } from './city.interface';

export interface IAddress {
  id: number
  streetAddress: string
  streetNumber: string
  neighborhood: string
  state: IState
  city: ICity
  zip: string
  latitude: number
  longitude: number
}
