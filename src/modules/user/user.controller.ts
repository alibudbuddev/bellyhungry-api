import { Controller, Get, Post, Req, Body, HttpException, HttpStatus, Res, Param } from '@nestjs/common';
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
  async create(@Body() body: any): Promise<User> {
    const user = await this.userService.create(body);
    return user;
    // .then(user => {
    //   return user;
    // })
    // .catch(e => {
    //   throw new HttpException(e.message, HttpStatus.INTERNAL_SERVER_ERROR);
    // });
  }

  @Get('schema')
  async schema(@Req() req: Request): Promise<any> {
    return UserSchema.paths;
  }

  @Get(':id')
  async getOne(@Param() params: any): Promise<User> {
  	const id = params.id;
    return this.userService.getOne(id);
  }
}
