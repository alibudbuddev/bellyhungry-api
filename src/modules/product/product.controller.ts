import { Controller, Get, Post, Put, Body, Req, HttpException, HttpStatus, UseGuards, Query, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product, ProductSchema } from './product.schema';
import { JwtAuthGuard } from '@guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('products')
export class ProductController {

	constructor(private productService: ProductService) {}

	@Get()
  find(@Req() req: any, @Query() query: any): any {
    return this.productService.find({merchant: req.user.id});
  }
  
	@Post()
  async create(@Body() body: any, @Req() req: any): Promise<any> {
  	const merchant = {merchant: req.user.id};
  	const product = Object.assign(body, merchant);
    return this.productService.create(product)
    .then(product => {
      return product;
    })
    .catch(e => {
      throw new HttpException(e.message, HttpStatus.NOT_ACCEPTABLE);
    });
  }

	@Get('schema')
  async schema(@Req() req: any): Promise<any> {
    return ProductSchema.paths;
  }

  @Put(':id')
  async findOneAndUpdate(@Req() req: any, @Param('id') id: string, @Body() body: any): Promise<Product> {
    const merchant = {merchant: req.user.id, _id: id};
    return this.productService.findOneAndUpdate(merchant, body);
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<Product> {
    return this.productService.findById(id);
  }
}
