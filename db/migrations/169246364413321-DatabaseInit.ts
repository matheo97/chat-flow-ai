import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { companySeed, userSeed } from '../seed/databaseInit.seed';
import { Company } from '../../entities/Company.entity';
import { User } from '../../entities/User.entity';

export class DatabaseInit169246364413321 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table({
        name: 'company',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'logo',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'email',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'phone',
            type: 'varchar',
            length: '20',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamptz',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestamptz',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
        ],
      }),
      true,
    );

    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'role',
            type: 'varchar',
            length: '60',
            isNullable: false,
          },
          {
            name: 'password',
            type: 'varchar',
            length: '100',
          },
          {
            name: 'company_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamptz',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestamptz',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            name: 'user_company_key',
            columnNames: ['company_id'],
            referencedTableName: 'company',
            referencedColumnNames: ['id'],
          },
        ],
      }),
      true,
    );

    await queryRunner.createTable(
      new Table({
        name: 'company_number',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'company_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'phone',
            type: 'varchar',
            length: '20',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamptz',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestamptz',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            name: 'company_number_company_key',
            columnNames: ['company_id'],
            referencedTableName: 'company',
            referencedColumnNames: ['id'],
          },
        ],
      }),
      true,
    );

    await queryRunner.createTable(
      new Table({
        name: 'audience',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '75',
            isNullable: false,
          },
          {
            name: 'company_number_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamptz',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestamptz',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            name: 'audience_company_number_key',
            columnNames: ['company_number_id'],
            referencedTableName: 'company_number',
            referencedColumnNames: ['id'],
          },
        ],
      }),
      true,
    );

    await queryRunner.createTable(
      new Table({
        name: 'audience_phone_number',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'phone',
            type: 'varchar',
            length: '20',
            isNullable: false,
          },
          {
            name: 'date_registered',
            type: 'timestamptz',
            isNullable: true,
          },
          {
            name: 'status',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'audience_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamptz',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestamptz',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            name: 'audience_phone_number_audience_key',
            columnNames: ['audience_id'],
            referencedTableName: 'audience',
            referencedColumnNames: ['id'],
          },
        ],
      }),
      true,
    );

    await queryRunner.createTable(
      new Table({
        name: 'template',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'category',
            type: 'varchar',
            length: '50',
            isNullable: false,
          },
          {
            name: 'language',
            type: 'varchar',
            length: '50',
            isNullable: false,
          },
          {
            name: 'header_type',
            type: 'varchar',
            length: '50',
            isNullable: true,
          },
          {
            name: 'body',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'body_params',
            isNullable: true,
            type: 'jsonb',
          },
          {
            name: 'footer_type',
            type: 'varchar',
            length: '50',
            isNullable: true,
          },
          {
            name: 'footer',
            type: 'varchar',
            length: '60',
            isNullable: true,
          },
          {
            name: 'button_type',
            type: 'varchar',
            length: '50',
            isNullable: true,
          },
          {
            name: 'button_params',
            isNullable: true,
            type: 'jsonb',
          },
          {
            name: 'company_number_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'created_at',
            type: 'timestamptz',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestamptz',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            name: 'template_company_number_key',
            columnNames: ['company_number_id'],
            referencedTableName: 'company_number',
            referencedColumnNames: ['id'],
          },
        ],
      }),
      true,
    );

    await queryRunner.createTable(
      new Table({
        name: 'campaing',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'uuid',
          },
          {
            name: 'name',
            type: 'varchar',
            length: '255',
            isNullable: false,
          },
          {
            name: 'company_number_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'template_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'audience_id',
            type: 'uuid',
            isNullable: false,
          },
          {
            name: 'schedule_time',
            type: 'timestamptz',
            isNullable: true,
          },
          {
            name: 'created_at',
            type: 'timestamptz',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
          {
            name: 'updated_at',
            type: 'timestamptz',
            default: 'CURRENT_TIMESTAMP',
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            name: 'campaing_company_number_key',
            columnNames: ['company_number_id'],
            referencedTableName: 'company_number',
            referencedColumnNames: ['id'],
          },
          {
            name: 'campaing_template_key',
            columnNames: ['template_id'],
            referencedTableName: 'template',
            referencedColumnNames: ['id'],
          },
          {
            name: 'campaing_audience_key',
            columnNames: ['audience_id'],
            referencedTableName: 'audience',
            referencedColumnNames: ['id'],
          },
        ],
      }),
      true,
    );

    await queryRunner.manager.getRepository(Company).save(companySeed);
    await queryRunner.manager.getRepository(User).save(userSeed);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropForeignKey('campaing', 'campaing_company_number_key');
    await queryRunner.dropForeignKey('campaing', 'campaing_template_key');
    await queryRunner.dropForeignKey('campaing', 'campaing_audience_key');
    await queryRunner.dropTable('campaing', true);
    await queryRunner.dropForeignKey('template', 'template_company_number_key');
    await queryRunner.dropTable('template', true);
    await queryRunner.dropForeignKey(
      'audience_phone_number',
      'audience_phone_number_audience_key',
    );
    await queryRunner.dropTable('audience_phone_number', true);
    await queryRunner.dropForeignKey('audience', 'audience_company_number_key');
    await queryRunner.dropTable('audience', true);
    await queryRunner.dropForeignKey(
      'company_number',
      'company_number_company_key',
    );
    await queryRunner.dropTable('company_number', true);
    await queryRunner.dropForeignKey('user', 'user_company_key');
    await queryRunner.dropTable('user', true);
    await queryRunner.dropTable('company', true);
  }
}
