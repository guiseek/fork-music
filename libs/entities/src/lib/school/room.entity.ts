import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Room {
  @PrimaryGeneratedColumn({
    type: 'int',
    name: 'id'
  })
  id: number;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 128,
    name: 'name'
  })
  name: string;

  @Column({
    type: 'varchar',
    nullable: false,
    length: 512,
    name: 'description'
  })
  description: string;

  @Column({
    type: 'tinyint',
    nullable: false,
    width: 1,
    name: 'active'
  })
  active: boolean;

}
