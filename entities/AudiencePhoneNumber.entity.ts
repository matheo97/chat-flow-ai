import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import {
  IsDefined,
  IsUUID,
  IsOptional,
  Length,
  IsPhoneNumber,
} from 'class-validator';
import {
  ApiHideProperty,
  ApiProperty,
  ApiPropertyOptional,
} from '@nestjs/swagger';
import { Auditable } from './Auditable';
import { Type } from 'class-transformer';
import { OrderPhoneNumberStatus } from '../src/modules/orderPhoneNumber/orderPhoneNumberStatus.enum';
import { Audience } from './Audience.entity';

@Entity('audience_phone_number')
export class AudiencePhoneNumber extends Auditable {
  @PrimaryGeneratedColumn('uuid')
  @IsOptional()
  @IsUUID()
  @ApiProperty({ description: 'Identifier' })
  id?: string;

  @Column()
  @IsDefined()
  @Length(2, 255)
  @ApiProperty({
    description: 'Name',
    minLength: 2,
    maxLength: 255,
  })
  name: string;

  @Column()
  @IsDefined()
  @IsPhoneNumber()
  @Length(0, 20)
  @ApiPropertyOptional({
    description: 'Phone',
    maxLength: 20,
  })
  phone: string;

  @Column({ name: 'date_registered' })
  @IsOptional()
  @ApiPropertyOptional({ description: 'Date Registered' })
  dateRegistered?: Date;

  @ApiProperty({
    description: 'Only "Successful", "Failed" allowed so far.',
    enum: OrderPhoneNumberStatus,
    minLength: 2,
    maxLength: 60,
  })
  @Column()
  @IsDefined()
  @Length(2, 60)
  @Type(() => String)
  status: string;

  @Column({ name: 'audience_id' })
  @IsDefined()
  @ApiProperty({ description: 'Audience Id' })
  audienceId: string;

  @ManyToOne(() => Audience)
  @JoinColumn({ name: 'audience_id' })
  @ApiHideProperty()
  audience?: Audience;
}
