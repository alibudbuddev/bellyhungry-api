import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { LoginGuard } from '@guards/login.guard';
import { JwtAuthGuard } from '@guards/jwt-auth.guard';
import { AuthenticatedGuard } from '@guards/authenticated.guard';
import { AuthService } from '@auth/auth.service';


@Controller()
export class AppController {

	constructor(private authService: AuthService) {}

  @Get('')
  async home() {
    return 'So High';
  }

  @UseGuards(LoginGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthenticatedGuard)
  @Get('auth/me')
  getProfile(@Request() req) {
    return {user: req.user, merchantId: Date.now()};
  }

  @UseGuards(JwtAuthGuard)
  @Get('auth/jwt/me')
  jwt(@Request() req) {
    return req.user;
  }

  @Get('api/environment')
  getEnv() {
    return {
      API_URL: process.env.API_URL
    }
  }
}
