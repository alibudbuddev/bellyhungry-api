import { Controller, Get, Post, Body, Req, Request, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product, ProductSchema } from './product.schema';
import { AuthenticatedGuard } from '@guards/authenticated.guard';

@Controller('products')
export class ProductController {

	constructor(private productService: ProductService) {}

	@Get()
  async getMany(@Req() req: Request): Promise<Product[]> {
    return this.productService.get();
  }
  
	@Post()
  @UseGuards(AuthenticatedGuard)
  async create(@Body() body: any, @Req() req: any): Promise<any> {
  	const merchant = {merchant: req.user._id};
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
