import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { City } from './city.entity';

@Entity('states')
export class State {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 2,
    nullable: false
  })
  acronym: string;

  @Column({
    length: 100,
    nullable: false
  })
  name: string;

  @OneToMany(type => City, city => city.state)
  cities: City[];

  // constructor(data: State) {
  //   Object.assign(this, data);
  // }
}