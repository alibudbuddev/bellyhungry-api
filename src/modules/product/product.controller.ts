import { Controller, Get, Post, Body, Req, Request, HttpException, HttpStatus } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product, ProductSchema } from './product.schema';

@Controller('products')
export class ProductController {

	constructor(private productService: ProductService) {}

	@Get()
  async getMany(@Req() req: Request): Promise<Product[]> {
    return this.productService.get();
  }
  
	@Post()
  async create(@Body() body: any): Promise<any> {
  	const merchant = {merchant: '5f912bb4ea3e9009395672da'};
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
  async schema(@Req() req: Request): Promise<any> {
    return ProductSchema.paths;
  }
}
