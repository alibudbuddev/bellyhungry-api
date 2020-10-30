import { Controller, Get, Query, Req, Param, HttpException, HttpStatus } from '@nestjs/common';
import { ProductService } from '@modules/product/product.service';

@Controller('feed')
export class FeedController {

	constructor(private productService: ProductService) {}

  // TODO: Don't allow user buy his own product.
	@Get('products')
  async find(@Req() req: any, @Query() query: any): Promise<any> {
    let filter = {};
    const options = {
      skip: query?.skip ? query.skip : 0,
      limit: query?.limit ? query.limit : 50
    };
    
    return this.productService.find(filter, options);
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
