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

	// @Get()
 //  find(@Req() req: any, @Query() query: any): any {
 //    return this.orderService.find({merchant: req.user._id});
 //  }
  
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

 //  @Put(':id')
 //  async findOneAndUpdate(@Req() req: any, @Param('id') id: string, @Body() body: any): Promise<Product> {
 //    const merchant = {merchant: req.user._id, _id: id};
 //    return this.orderService.findOneAndUpdate(merchant, body);
 //  }

 //  @Get(':id')
 //  async getOne(@Param('id') id: string): Promise<Product> {
 //    return this.orderService.findById(id);
 //  }
}
