import { Request, Controller, Post } from '@nestjs/common';
import { UseGuards } from '@nestjs/common/decorators';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  create(@Request() req) {
    return { user: req.user };
  }
}
