import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { User } from './user.schema';
import { UserService } from './user.service';

@Controller('users')
export class UserController {

	constructor(private userService: UserService) {}

	@Get()
  async getMany(@Req() req: Request): Promise<User[]> {
    return this.userService.getMany();
  }

  @Get(':id')
  async getOne(@Req() req: Request): Promise<User> {
  	const id = req.params.id;
    return this.userService.getOne(id);
  }

  @Post('')
  async create(@Req() req: Request): Promise<User> {
  	const id = req.params.id;
    return this.userService.getOne(id);
  }
}
