import { Controller, Get, Post, Req, Body, HttpException, HttpStatus, Param, UseGuards } from '@nestjs/common';
import { Request } from 'express';
import { AdminGuard } from '@guards/admin.guard';
import { SubAdminGuard } from '@guards/sub-admin.guard';
import { Practice, PracticeSchema } from './practice.schema';
import { PracticeService } from './practice.service';

@Controller('practice')
export class PracticeController {

	constructor(private practiceService: PracticeService) {}

	@Get()
  async getMany(@Req() req: Request): Promise<Practice[]> {
    return this.practiceService.get();
  }

  @Post()
  async create(@Body() body: any): Promise<Practice> {
    return this.practiceService.create(body)
    .then(user => {
      return user;
    })
    .catch(e => {
      throw new HttpException(e.message, HttpStatus.NOT_ACCEPTABLE);
    });
  }

  @Get('schema')
  async schema(@Req() req: Request): Promise<any> {
    return PracticeSchema.paths;
  }

  @Get('admin-only')
  @UseGuards(AdminGuard)
  adminOnly(): any {
    return 'only admin can see this.';
  }

  @Get('sub-admin-only')
  @UseGuards(SubAdminGuard)
  subAdminOnly(): any {
    return 'only sub-admin can see this.';
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<Practice> {
    return this.practiceService.getOne(id);
  }
}
