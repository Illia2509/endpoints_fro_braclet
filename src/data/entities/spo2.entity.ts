import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('spo2_data')
export class SpO2Entity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  spo2: number;

  @CreateDateColumn()
  createdAt: Date;
}