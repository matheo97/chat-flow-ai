import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { IsDefined, IsUUID, IsOptional, Length } from 'class-validator';
import {
  ApiHideProperty,
  ApiProperty,
  ApiPropertyOptional,
} from '@nestjs/swagger';
import { Auditable } from './Auditable';
import { CompanyNumber } from './CompanyNumber.entity';

@Entity('audience')
export class Audience extends Auditable {
  @PrimaryGeneratedColumn('uuid')
  @IsOptional()
  @IsUUID()
  @ApiProperty({ description: 'User Identifier' })
  id?: string;

  @Column()
  @IsDefined()
  @Length(2, 75)
  @ApiProperty({ description: 'Audience Name', minLength: 2, maxLength: 75 })
  name: string;

  @Column({ name: 'company_number_id' })
  @IsDefined()
  @ApiPropertyOptional({ description: 'Company Number Id' })
  companyNumberId?: string;

  @ManyToOne(() => CompanyNumber)
  @JoinColumn({ name: 'company_number_id' })
  @ApiHideProperty()
  companyNumber?: CompanyNumber;
}
