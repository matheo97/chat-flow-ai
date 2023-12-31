import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import {
  ApiBearerAuth,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { User } from '../../../entities/User.entity';
import { UserRoleType } from '../user/user.enum';
import { AccessToken } from './auth.dto';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import RoleGuard from './roles.guard';

@Controller('auth')
@ApiTags('Authentication')
@ApiBearerAuth()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('/login')
  @ApiOperation({ summary: 'Get access token' })
  @ApiOkResponse({ description: 'Access token', type: AccessToken })
  async login(@Request() req): Promise<AccessToken> {
    return this.authService.login(req.user);
  }

  @UseGuards(RoleGuard([UserRoleType.ADMIN, UserRoleType.MONITOR]))
  @Get('/profile')
  @ApiOperation({ summary: 'Get user from Request' })
  @ApiOkResponse({ description: 'User from Request', type: User })
  getProfile(@Request() req): Promise<User> {
    return req.user;
  }
}
