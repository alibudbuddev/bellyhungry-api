import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '@guards/jwt-auth.guard';
import { OrderService } from '@modules/order/order.service';

@Controller('merchant')
export class MerchantController {

	constructor(private orderService: OrderService) {}

  @Get('orders')
  @UseGuards(JwtAuthGuard)
  async getMerchantOrders(@Req() req): Promise<any> {
    const filter = {'merchant': req.user.user._id};
    return this.orderService.items(filter);
  }
}
