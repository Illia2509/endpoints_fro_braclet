import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataController } from './data.controller';
import { DataService } from './data.service';
import { PulseEntity } from './entities/pulse.entity';
import { SpO2Entity } from './entities/spo2.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PulseEntity, SpO2Entity])],
  controllers: [DataController],
  providers: [DataService],
})
export class DataModule {}