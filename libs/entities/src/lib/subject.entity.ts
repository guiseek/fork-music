import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IsString, MaxLength, IsNotEmpty } from 'class-validator';

@Entity()
export class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @IsString({ always: true })
  @IsNotEmpty({ message: 'Obrigatório' })
  @MaxLength(200, { message: 'Máximo de 200' })
  @Column({
    type: 'varchar',
    length: 200
  })
  name: string;
}
