import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataModule } from './data/data.module';
import { ConfigModule } from '@nestjs/config';
import { DataEntity } from './data/entities/data.entity';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DATABASE_HOST,
      port: Number(process.env.DATABASE_PORT),
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      entities: [DataEntity],
      synchronize: true, // Автоматичне створення таблиць (тільки для розробки!)
    }),
    DataModule,
  ],
})
export class AppModule {}