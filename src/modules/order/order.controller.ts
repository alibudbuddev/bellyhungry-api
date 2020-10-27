import { Controller, Get, Post, Put, Body, Req, HttpException, HttpStatus, UseGuards, Query, Param } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order, OrderSchema } from './order.schema';
import { AuthenticatedGuard } from '@guards/authenticated.guard';
import { CartService } from '@modules/cart/cart.service';
import CreateOrderDto from './dto/create-order.dto';
import OrderItemDto from './dto/order-item.dto';

@Controller('orders')
export class OrderController {

	constructor(private orderService: OrderService, private cartService: CartService) {}
  
	@Post()
  async create(@Req() req: any, @Body() body: any): Promise<any> {
  	const orderMetaData = {
      customer: req?.user?._id || null,
      customerDetails: body.customerDetails,
      items: body.items
    };
  	const order = new CreateOrderDto(orderMetaData);

    return this.orderService.create(order.getFields())
    .then(async (order) => {
      await this.cartService.delete({customer: orderMetaData.customer}, true);
      return order;
    })
    .catch(e => {
      throw new HttpException(e.message, HttpStatus.NOT_ACCEPTABLE);
    });
  }

	@Get('schema')
  async schema(@Req() req: any): Promise<any> {
    return OrderSchema.paths;
  }
}
