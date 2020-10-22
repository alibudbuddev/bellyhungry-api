import { Controller, Get, Post, Req, Body, HttpException, HttpStatus, Param, UsePipes } from '@nestjs/common';
import { Request } from 'express';
import { User, UserSchema } from './user.schema';
import { UserService } from './user.service';
import CreateUserDto from './dto/create-user.dto';
import UserCreateValidatorPipe from '@pipes/user-create-validator.pipe';

@Controller('users')
export class UserController {

	constructor(private userService: UserService) {}

	@Get()
  async getMany(@Req() req: Request): Promise<User[]> {
    return this.userService.get();
  }

  @Post()
  @UsePipes(UserCreateValidatorPipe)
  async create(@Body() body: CreateUserDto): Promise<User> {
    return this.userService.create(body)
    .then(user => {
      return user;
    })
    .catch(e => {
      throw new HttpException(e.message, HttpStatus.NOT_ACCEPTABLE);
    });
  }

  @Get('schema')
  async schema(@Req() req: Request): Promise<any> {
    return UserSchema.paths;
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<User> {
    return this.userService.findById(id);
  }
}
