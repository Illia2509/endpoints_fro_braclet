import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataService } from './data.service';
import { DataController } from './data.controller';
import { DataEntity } from './entities/data.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DataEntity])],
  controllers: [DataController],
  providers: [DataService],
})
export class DataModule {}