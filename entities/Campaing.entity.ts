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
import { Template } from './Template.entity';
import { Audience } from './Audience.entity';

@Entity('campaing')
export class Campaing extends Auditable {
  @PrimaryGeneratedColumn('uuid')
  @IsOptional()
  @IsUUID()
  @ApiProperty({ description: 'Template Identifier' })
  id?: string;

  @Column()
  @IsDefined()
  @Length(2, 255)
  @ApiProperty({ description: 'Template Name', minLength: 2, maxLength: 255 })
  name: string;

  @Column({ name: 'company_number_id' })
  @IsDefined()
  @ApiProperty({ description: 'Company Number Id' })
  companyNumberId: string;

  @Column({ name: 'template_id' })
  @IsDefined()
  @ApiProperty({ description: 'Template Id' })
  templateId: string;

  @Column({ name: 'audience_id' })
  @IsDefined()
  @ApiProperty({ description: 'Audience Id' })
  audienceId: string;

  @Column({ name: 'schedule_time' })
  @IsOptional()
  @ApiPropertyOptional({ description: 'Scheduler Time' })
  schedulerTime?: Date;

  @ManyToOne(() => CompanyNumber)
  @JoinColumn({ name: 'company_number_id' })
  @ApiHideProperty()
  companyNumber?: CompanyNumber;

  @ManyToOne(() => Template)
  @JoinColumn({ name: 'template_id' })
  @ApiHideProperty()
  template?: Template;

  @ManyToOne(() => Audience)
  @JoinColumn({ name: 'audience_id' })
  @ApiHideProperty()
  audience?: Audience;
}
