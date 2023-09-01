import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { IsDefined, IsUUID, IsOptional, Length } from 'class-validator';
import { ApiHideProperty, ApiProperty } from '@nestjs/swagger';
import { Auditable } from './Auditable';
import { CompanyNumber } from './CompanyNumber.entity';

@Entity('template')
export class Template extends Auditable {
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

  @Column()
  @IsDefined()
  @Length(2, 50)
  @ApiProperty({
    description: 'Template Category',
    minLength: 2,
    maxLength: 50,
  })
  category: string;

  @Column()
  @IsOptional()
  @Length(2, 50)
  @ApiProperty({
    description: 'Template Language',
    minLength: 2,
    maxLength: 50,
  })
  language?: string;

  @Column({ name: 'header_type' })
  @IsDefined()
  @Length(2, 50)
  @ApiProperty({
    description: 'Template Header Type',
    minLength: 2,
    maxLength: 50,
  })
  headerType: string;

  @Column({ name: 'body' })
  @IsDefined()
  @ApiProperty({
    description: 'Template Body',
  })
  body: string;

  @Column({ name: 'body_params', type: 'jsonb' })
  @IsDefined()
  @ApiProperty({
    description: 'Template Body Params',
  })
  bodyParams: string;

  @Column({ name: 'footer_type' })
  @IsDefined()
  @Length(2, 50)
  @ApiProperty({
    description: 'Template Footer Type',
  })
  footerType: string;

  @Column({ name: 'footer' })
  @IsDefined()
  @Length(2, 50)
  @ApiProperty({
    description: 'Template Footer',
  })
  footer: string;

  @Column({ name: 'button_type' })
  @IsDefined()
  @Length(2, 50)
  @ApiProperty({
    description: 'Template Button Type',
  })
  buttonType: string;

  @Column({ name: 'button_params', type: 'jsonb' })
  @IsDefined()
  @ApiProperty({
    description: 'Template Button Params',
  })
  buttonParams: string;

  @Column({ name: 'company_number_id' })
  @IsDefined()
  @ApiProperty({ description: 'Company Number Id' })
  companyNumberId: string;

  @ManyToOne(() => CompanyNumber)
  @JoinColumn({ name: 'company_number_id' })
  @ApiHideProperty()
  companyNumber?: CompanyNumber;
}
