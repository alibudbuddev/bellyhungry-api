import { Controller, Get, Post, Put, Body, Req, HttpException, HttpStatus, UseGuards, Query, Param } from '@nestjs/common';
import { OrderService } from './order.service';
import { Order, OrderSchema } from './order.schema';
import { AuthenticatedGuard } from '@guards/authenticated.guard';
import CreateOrderDto from './dto/create-order.dto';
import OrderItemsDto from './dto/order-items.dto';

@UseGuards(AuthenticatedGuard)
@Controller('orders')
export class OrderController {

	constructor(private orderService: OrderService) {}
  
	@Post()
  async create(@Req() req: any, @Body('items') items: OrderItemsDto[]): Promise<any> {
  	const orderMetaData = {customer: req.user._id, items: items};
  	const order = new CreateOrderDto(orderMetaData);
    return this.orderService.create(order.getFields())
    .then(order => {
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
