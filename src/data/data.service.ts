import { Injectable } from '@nestjs/common';
import { CreateDataDto } from './dto/create-data.dto';

@Injectable()
export class DataService {
  saveData(data: CreateDataDto) {
    console.log('📥 Received data:', data);
    return { message: '✅ Data saved successfully' };
  }
}