import { Controller, Get, Req } from '@nestjs/common';

@Controller('merchant/orders')
export class MerchantController {

  @Get('')
  orders(@Req() req: any): any {
    // return this.productService.find({merchant: req.user._id});
  }
}
