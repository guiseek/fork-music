export interface LocationState {
  id: number
  name: string
  abbr: string
  uf?: string
}
export class LocationCity {
  id: number
  stateId?: number
  state?: LocationState
  name: string
}

export interface Estado {
  id: number
  nome: string
  sigla: string
  regiao: any
}

export interface Viacep {
  bairro: string;
  cep: string;
  complemento: string;
  ibge: string;
  localidade: string;
  logradouro: string;
  uf: string;
}