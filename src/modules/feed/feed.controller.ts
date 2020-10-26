import { Controller, Get, Query, Req, Param, HttpException, HttpStatus } from '@nestjs/common';
import { ProductService } from '@modules/product/product.service';

@Controller('feed')
export class FeedController {

	constructor(private productService: ProductService) {}

	@Get('products')
  async find(@Query() query: any): Promise<any> {
    return this.productService.find();
  }

  @Get('products/:id')
  async getOne(@Param('id') id: string): Promise<any> {
    return this.productService.findById(id)
    .then(product => {
      return product;
    })
    .catch(e => {
      throw new HttpException(e.message, HttpStatus.NOT_ACCEPTABLE);
    });
  }
}
