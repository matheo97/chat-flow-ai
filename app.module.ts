import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { Auth0ExampleModule, AuthorizationModule } from './src/modules';

const typeormConfig = require('./ormconfig.js');

require('dotenv').config();

const env = process.env.NODE_ENV;

@Module({
  imports: [
    TypeOrmModule.forRoot(typeormConfig),
    ConfigModule.forRoot(),
    AuthorizationModule,
    Auth0ExampleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
