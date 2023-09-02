import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import {
  IsDefined,
  IsEmail,
  IsUUID,
  IsOptional,
  Length,
  IsHash,
} from 'class-validator';
import {
  ApiHideProperty,
  ApiProperty,
  ApiPropertyOptional,
} from '@nestjs/swagger';
import { Auditable } from './Auditable';
import { Company } from './Company.entity';
import { UserRoleType } from '../src/modules/user/user.enum';
import { Exclude, Type } from 'class-transformer';

@Entity('user')
export class User extends Auditable {
  @PrimaryGeneratedColumn('uuid')
  @IsOptional()
  @IsUUID()
  @ApiProperty({ description: 'User Identifier' })
  id?: string;

  @Column()
  @IsDefined()
  @Length(2, 255)
  @ApiProperty({ description: 'User Name', minLength: 2, maxLength: 255 })
  name: string;

  @Column()
  @IsDefined()
  @IsEmail()
  @Length(3, 255)
  @ApiPropertyOptional({ description: 'User Email', maxLength: 255 })
  email: string;

  @ApiProperty({
    description: 'Only "Admin", "Monitor" allowed so far.',
    enum: UserRoleType,
    minLength: 2,
    maxLength: 60,
  })
  @Column()
  @IsDefined()
  @Length(2, 60)
  @Type(() => String)
  role: string;

  @Column()
  @IsOptional()
  @IsHash('sha256')
  @Length(8, 100)
  @ApiProperty({
    description: 'Password for the user',
    nullable: true,
    type: String,
  })
  @Exclude({ toPlainOnly: true })
  password?: string;

  @Column({ name: 'company_id' })
  @IsOptional()
  @ApiPropertyOptional({ description: 'Company Id' })
  companyId?: string;

  @ManyToOne(() => Company)
  @JoinColumn({ name: 'company_id' })
  @ApiHideProperty()
  company?: Company;
}
