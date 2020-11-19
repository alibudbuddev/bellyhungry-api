import { Controller, Res, Post, UseGuards, Get, Req, UseFilters } from '@nestjs/common';
import { LoginGuard } from '@guards/login.guard';
import { JwtAuthGuard } from '@guards/jwt-auth.guard';
import { AuthenticatedGuard } from '@guards/authenticated.guard';
import { AuthGuard } from "@nestjs/passport";
import { AuthService } from '@auth/auth.service';
import { AllExceptionsFilter } from './exceptions/all.exception';
import * as path from 'path';
// import FB, {FacebookApiException} from 'fb';

@Controller()
export class AppController {

	constructor(private authService: AuthService) {}

  @Get('')
  root(@Res() res) {
    res.sendFile(path.join(__dirname, './../angular/dist/index.html'));
  }

  // Login/Register user from client with facebook access token.
  @Get('auth/facebook/get')
  @UseFilters(new AllExceptionsFilter())
  @UseGuards(AuthGuard('facebook-token'))
  async facebookValidate(@Req() req: any): Promise<any> {
    return req.user;
  }

  @UseGuards(JwtAuthGuard)
  @Get('auth/jwt/me')
  jwt(@Req() req) {
    return req.user;
  }

  @UseGuards(LoginGuard)
  @Post('auth/login')
  async login(@Req() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(AuthenticatedGuard)
  @Get('auth/me')
  getProfile(@Req() req) {
    return {user: req.user, merchantId: Date.now()};
  }
  
}
