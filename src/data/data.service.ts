import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PulseEntity } from './entities/pulse.entity';
import { SpO2Entity } from './entities/spo2.entity';
import { CreateDataDto } from './dto/create-data.dto';

@Injectable()
export class DataService {
  constructor(
    @InjectRepository(PulseEntity)
    private pulseRepo: Repository<PulseEntity>,
    @InjectRepository(SpO2Entity)
    private spo2Repo: Repository<SpO2Entity>,
  ) {}

  async saveData(data: CreateDataDto) {
    const pulse = this.pulseRepo.create({
      bpm: data.bpm,
      fall: data.fall,
    });

    const spo2 = this.spo2Repo.create({
      spo2: data.spo2,
    });

    await this.pulseRepo.save(pulse);
    await this.spo2Repo.save(spo2);

    return { message: '✅ Saved to both tables' };
  }
}