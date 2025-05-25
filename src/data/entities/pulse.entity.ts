import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('pulse_data')
export class PulseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  bpm: number;

  @Column()
  fall: boolean;

  @CreateDateColumn()
  createdAt: Date;
}