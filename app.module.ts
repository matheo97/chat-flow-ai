import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Auth0ExampleModule, AuthorizationModule } from './src/modules';
import entities from './entities';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        migrationsTableName: 'migrations',
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database:
          configService.get('NODE_ENV') === 'test'
            ? configService.get('DB_TEST_DATABASE')
            : configService.get('DB_DATABASE'),
        entities: entities,
        synchronize: false,
        logging: true,
      }),
      inject: [ConfigService],
    }),
    AuthorizationModule,
    Auth0ExampleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
