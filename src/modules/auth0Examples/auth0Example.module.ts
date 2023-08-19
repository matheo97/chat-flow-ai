import { Module } from '@nestjs/common';
import { Auth0ExamplesController } from './auth0Example.controller';

@Module({
  imports: [],
  controllers: [Auth0ExamplesController],
  providers: [],
})
export class Auth0ExampleModule {}
