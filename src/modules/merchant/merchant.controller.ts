import { Controller, Get, Req, Param, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@guards/jwt-auth.guard';
import { MerchantService } from './merchant.service';

@Controller('merchant')
@UseGuards(JwtAuthGuard)
export class MerchantController {

	constructor(private merchantService: MerchantService) {}

  @Get('orders')
  async getMerchantOrders(@Req() req): Promise<any> {
    return this.merchantService.getOrders(req.user.user._id);
  }

  @Get('orders/:id')
  async getMerchantOrderDtetails(@Req() req, @Param('id') orderId: any): Promise<any> {
    const items = await this.merchantService.getOrderItems(req.user.user._id, orderId);
    const details = await this.merchantService.getOrderDetails(orderId);
    return {items, details};
  }
}
