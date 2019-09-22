import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn, ManyToOne } from 'typeorm';
import { User } from './user.entity';
import { City } from './city.entity';
import { State } from './state.entity';

@Entity('companies')
export class Company {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({
    length: 500,
    nullable: true
  })
  description: string;

  @Column({
    type: 'char',
    length: 14,
    unique: true
  })
  cnpj: number;

  @Column({ nullable: true })
  logo: string;

  @Column({ nullable: true })
  photo: string;

  @ManyToOne(type => State, {
    eager: true
  })
  @JoinColumn()
  state: State;

  @ManyToOne(type => City, {
    eager: true
  })
  @JoinColumn()
  city: City;

  @Column({ nullable: true })
  address: string;

  @Column('decimal', { nullable: true, precision: 11, scale: 8 })
  latitude: number;

  @Column('decimal', { nullable: true, precision: 11, scale: 8 })
  longitude: number;

  @Column({ default: true })
  active: boolean;

  @ManyToMany(type => User, user => user.companies, {
    eager: true
  })
  users: User[];

  // @OneToMany(type => Menu, menu => menu.company)
  // menu: Menu[];
}