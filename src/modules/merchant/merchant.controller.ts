import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@guards/jwt-auth.guard';
import { MerchantService } from './merchant.service';

@Controller('merchant')
export class MerchantController {

	constructor(private merchantService: MerchantService) {}

  @Get('orders')
  @UseGuards(JwtAuthGuard)
  async getMerchantOrders(@Req() req): Promise<any> {
    return this.merchantService.getOrders(req.user.user._id);
  }
}
