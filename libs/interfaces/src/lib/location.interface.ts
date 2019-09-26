import { IAddress } from './address.interface';

export class ILocation {
  id: number;
  name: string;
  domain: string;
  description: string;
  address: IAddress;
  spaces: number;
  isSublocation: boolean;
  link: string
}
