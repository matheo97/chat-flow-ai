import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class Auth0ExamplesController {
  constructor() {}

  @Get()
  @UseGuards(AuthGuard('jwt'))
  getHello(): string {
    return 'Hello World!';
  }
}
