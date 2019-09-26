import { CrudValidationGroups } from '@nestjsx/crud';
import { IsDefined, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { City } from './city.entity';
import { State } from './state.entity';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id: number;

  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE], message: 'Logradouro obrigatório' })
  @IsString({ always: true })
  @IsNotEmpty({ message: 'Obrigatório' })
  @Column({
    name: 'street_address'
  })
  streetAddress: string;

  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE], message: 'Número obrigatório' })
  @IsNotEmpty({ message: 'Obrigatório' })
  @Column({
    name: 'street_number',
    nullable: false
  })
  streetNumber: string;

  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE], message: 'Estado obrigatório' })
  @IsString({ always: true })
  @IsNotEmpty({ message: 'Obrigatório' })
  @Column({ nullable: false })
  neighborhood: string;
  
  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE], message: 'Estado obrigatório' })
  @IsNotEmpty({ message: 'Estado obrigatório' })
  @ManyToOne(type => State)
  @JoinColumn()
  state: State;

  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE], message: 'Cidade obrigatória' })
  @IsNotEmpty({ message: 'Cidade obrigatória' })
  @ManyToOne(type => City)
  @JoinColumn()
  city: City;

  @Column({
    nullable: true
  })
  zip: string;

  @Column({
    type: 'float',
    precision: 8,
    nullable: true
  })
  latitude: number;

  @Column({
    type: 'float',
    precision: 8,
    nullable: true
  })
  longitude: number;
}
