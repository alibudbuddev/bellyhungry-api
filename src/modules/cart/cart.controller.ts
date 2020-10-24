import { Controller, Get, Req, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { Cart, CartSchema } from './cart.schema';
import { CartService } from './cart.service';
import OrderItemDto from '@modules/order/dto/order-item.dto';
import CreateOrderDto from '@modules/order/dto/create-order.dto';

@Controller('cart')
export class CartController {

	constructor(private cartService: CartService) {}

	@Post()
  // async create(@Req() req: any, @Body('items') items: OrderItemDto[]): Promise<any> {
  // 	const orderMetaData = {customer: req.user._id, items: items};
  // 	const order = new CreateOrderDto(orderMetaData);
  //   return this.cartService.create(order.getFields())
  //   .then(order => {
  //     return order;
  //   })
  //   .catch(e => {
  //     throw new HttpException(e.message, HttpStatus.NOT_ACCEPTABLE);
  //   });
  // }

	@Get('schema')
  schema(): any {
    return CartSchema.paths;
  }
}
