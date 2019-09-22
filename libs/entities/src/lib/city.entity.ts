import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn
} from 'typeorm';
import { State } from '../lib/state.entity';

@Entity('cities')
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
    nullable: false
  })
  name: string;

  @Column({
    type: 'float',
    precision: 8,
    nullable: false
  })
  latitude: number;

  @Column({
    type: 'float',
    precision: 8,
    nullable: false
  })
  longitude: number;

  @Column({
    nullable: false
  })
  capital: boolean;

  @ManyToOne(type => State, state => state.cities)
  @JoinColumn()
  state: State;

  constructor() {}
  // constructor(data: City) {
  //   Object.assign(this, data);
  // }
}