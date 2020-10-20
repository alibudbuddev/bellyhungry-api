import { Injectable } from '@nestjs/common';
import { UserService } from '@modules/user/user.service';

@Injectable()
export class AuthService {

	constructor(private userService: UserService) {}

	async validateUser(email: string, password: string = null): Promise<any> {
    const user = await this.userService.findOne(email);
    if (user) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

}
