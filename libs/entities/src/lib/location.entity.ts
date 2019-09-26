import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { IsNotEmpty, IsString, IsDefined, IsOptional, MaxLength, IsBoolean, IsUrl } from 'class-validator';
import { CrudValidationGroups } from '@nestjsx/crud';
import { Address } from './address.entity';

const { CREATE, UPDATE } = CrudValidationGroups;

@Entity('locations')
export class Location {
  @PrimaryGeneratedColumn()
  id: number;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ always: true })
  @MaxLength(100, { always: true })
  @Column({ type: 'varchar', length: 100, nullable: false })
  name: string;

  @IsOptional({ groups: [UPDATE] })
  @IsNotEmpty({ groups: [CREATE] })
  @IsString({ groups: [CREATE, UPDATE] })
  @MaxLength(100, { groups: [CREATE, UPDATE] })
  @Column({ type: 'varchar', length: 100, nullable: false })
  domain: string;

  @IsOptional({ always: true })
  @IsString({ always: true })
  @Column({ type: 'text', nullable: true, default: null })
  description: string;

  @IsOptional({ groups: [UPDATE] })
  @IsDefined({ groups: [CREATE] })
  @IsNotEmpty({ message: 'Endereço obrigatório' })
  @ManyToOne(type => Address)
  @JoinColumn()
  address: Address;

  @IsOptional({ always: true })
  @IsString({ always: true })
  @Column({ type: 'int', nullable: true, default: null })
  spaces: number;

  @IsBoolean({ message: 'Valor inválido' })
  @Column({
    name: 'is_sublocation',
    default: false
  })
  isSublocation: boolean;

  @IsUrl({
    host_whitelist: ['maps.google.com']
  })
  @Column({
    type: String
  })
  link: string
}
