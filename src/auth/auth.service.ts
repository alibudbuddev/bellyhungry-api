import { Injectable } from '@nestjs/common';
import { UserService } from '@modules/user/user.service';
import { JwtService } from '@nestjs/jwt';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {

	constructor(private userService: UserService, private jwtService: JwtService) {}

	async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne({email});

    if (!user) return;

    const passwordHash: boolean = await argon2.verify(user.password, password);

    if (passwordHash) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = {email: user.email, sub: user.userId, id: user._id};
    return {
      access_token: this.jwtService.sign(payload),
      user: {name: user.name}
    };
  }

}
