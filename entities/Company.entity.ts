import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import {
  IsUUID,
  IsOptional,
  Length,
  IsPhoneNumber,
  IsUrl,
  IsDefined,
  IsEmail,
} from 'class-validator';
import { Auditable } from './Auditable';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

@Entity('company')
export class Company extends Auditable {
  @PrimaryGeneratedColumn('uuid')
  @IsUUID()
  @IsOptional()
  @ApiProperty({
    description: 'Unique identifier for Company',
    nullable: true,
    type: String,
  })
  id?: string;

  @Column()
  @Length(2, 255)
  @IsDefined()
  @ApiProperty({
    description: 'Name for the company',
    nullable: false,
    type: String,
  })
  name: string;

  @Column()
  @IsUrl()
  @IsOptional()
  @ApiProperty({
    description: 'Logo for the company',
    nullable: true,
    type: String,
  })
  logo?: string;

  @Column()
  @IsDefined()
  @IsEmail()
  @Length(3, 255)
  @ApiPropertyOptional({ description: 'Company Email', maxLength: 255 })
  email: string;

  @Column()
  @IsDefined()
  @IsPhoneNumber()
  @Length(0, 20)
  @ApiPropertyOptional({ description: 'Company Phone', maxLength: 20 })
  phone: string;
}
