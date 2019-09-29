import { Column, Entity, Index, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { OptionIncluded } from './option-included.entity';


@Entity('option')
@Index('option_ak_1', ['optionName'], { unique: true })
export class Option {

  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id'
  })
  id: number;


  @Column({
    type: 'varchar',
    nullable: false,
    unique: true,
    name: 'option_name'
  })
  optionName: string;



  @OneToMany(() => OptionIncluded, (optionIncluded: OptionIncluded) => optionIncluded.option, { onDelete: 'RESTRICT', onUpdate: 'RESTRICT' })
  optionIncludeds: OptionIncluded[];

}
