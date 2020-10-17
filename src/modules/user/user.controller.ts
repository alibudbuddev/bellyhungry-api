import { Controller, Get, Post, Req, Body, HttpException, HttpStatus, Res } from '@nestjs/common';
import { Request } from 'express';
import { User, UserSchema } from './user.schema';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

	constructor(private userService: UserService) {}

	@Get()
  async getMany(@Req() req: Request): Promise<User[]> {
    return this.userService.getMany();
  }

  @Post()
  async create(@Body() body: any, @Res() res: any): Promise<User> {
    return this.userService.create(body)
    .then(user => {
      return res.json(user);
    })
    .catch(e => {
      throw new HttpException(e.message, HttpStatus.FORBIDDEN);
    });
  }

  @Get('schema')
  async schema(@Req() req: Request): Promise<any> {
    return UserSchema.paths;
  }

  @Get(':id')
  async getOne(@Req() req: Request): Promise<User> {
  	const id = req.params.id;
    return this.userService.getOne(id);
  }
}
