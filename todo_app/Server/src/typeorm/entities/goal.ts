import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'Goal' })
export class Goal {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;
}
