import { Controller, Get, Post, Body, Req, HttpException, HttpStatus, UseGuards, Query, Param } from '@nestjs/common';
import { ProductService } from './product.service';
import { Product, ProductSchema } from './product.schema';
import { AuthenticatedGuard } from '@guards/authenticated.guard';

@UseGuards(AuthenticatedGuard)
@Controller('products')
export class ProductController {

	constructor(private productService: ProductService) {}

	@Get()
  find(@Req() req: any, @Query() query: any): any {
    return this.productService.find({merchant: req.user._id});
  }
  
	@Post()
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
  async schema(@Req() req: any): Promise<any> {
    return ProductSchema.paths;
  }

  @Get(':id')
  async getOne(@Param('id') id: string): Promise<Product> {
    return this.productService.findById(id);
  }
}
