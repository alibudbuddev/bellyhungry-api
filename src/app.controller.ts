import { Controller, Request, Post, UseGuards, Get } from '@nestjs/common';
import { LocalAuthGuard } from '@guards/local-auth.guard';
import { JwtAuthGuard } from '@guards/jwt-auth.guard';
import { AuthService } from '@auth/auth.service';


@Controller()
export class AppController {

	constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('auth/me')
  getProfile(@Request() req) {
    return {user: req.user};
  }
}
