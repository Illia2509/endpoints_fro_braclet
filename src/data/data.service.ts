import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DataEntity } from './entities/data.entity';
import { CreateDataDto } from './dto/create-data.dto';

@Injectable()
export class DataService {
  constructor(
    @InjectRepository(DataEntity)
    private dataRepository: Repository<DataEntity>,
  ) {}

  async saveData(data: CreateDataDto) {
    const saved = await this.dataRepository.save(data);
    return { message: '✅ Data saved', data: saved };
  }
}