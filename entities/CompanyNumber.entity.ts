import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import {
  IsUUID,
  IsOptional,
  Length,
  IsPhoneNumber,
  IsDefined,
} from 'class-validator';
import { Auditable } from './Auditable';
import {
  ApiHideProperty,
  ApiProperty,
  ApiPropertyOptional,
} from '@nestjs/swagger';
import { Company } from './Company.entity';

@Entity('company_number')
export class CompanyNumber extends Auditable {
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
  @IsDefined()
  @IsPhoneNumber()
  @Length(0, 20)
  @ApiPropertyOptional({
    description: 'Company WP Business Phone',
    maxLength: 20,
  })
  phone: string;

  @Column({ name: 'company_id' })
  @IsDefined()
  @ApiPropertyOptional({ description: 'Company Id' })
  companyId: string;

  @ManyToOne(() => Company)
  @JoinColumn({ name: 'company_id' })
  @ApiHideProperty()
  company?: Company;
}
