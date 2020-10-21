import { Injectable } from '@nestjs/common';
import { UserService } from '@modules/user/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

	constructor(private userService: UserService, private jwtService: JwtService) {}

	async validateUser(email: string, password: string = null): Promise<any> {
    const user = await this.userService.findOne(email, password);
    if (user && user.password === password) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }


}
