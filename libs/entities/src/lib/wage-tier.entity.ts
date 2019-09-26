import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { IsString, IsNotEmpty, MaxLength } from 'class-validator';

@Entity('wage_tiers')
export class WageTier {
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
