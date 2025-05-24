import { IsInt, Min, Max, IsBoolean } from 'class-validator';

export class CreateDataDto {
  @IsInt()
  @Min(20)
  @Max(255)
  bpm: number;

  @IsInt()
  @Min(50)
  @Max(100)
  spo2: number;

  @IsBoolean()
  fall: boolean;
}