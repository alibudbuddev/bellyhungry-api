import { Controller, Get, Delete, Post, Put, Req, Body, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { Cart, CartSchema } from './cart.schema';
import { CartService } from './cart.service';
import { AuthenticatedGuard } from '@guards/authenticated.guard';
import OrderItemDto from '@modules/order/dto/order-item.dto';
import CreateOrderDto from '@modules/order/dto/create-order.dto';

@Controller('cart')
export class CartController {

	constructor(private cartService: CartService) {}

	@Post()
  @UseGuards(AuthenticatedGuard)
  async create(@Req() req: any, @Body('item') item: OrderItemDto): Promise<any> {
    const customer = req.user._id;
    const cartRecord = await this.getCart(customer);
    const items = [item];
    const cartMetaData = {customer, items};

    // TODO: 
    // -  Check if user has current cart record.
    // - If YES > Get that cart and update items.
    // - if No > Create new card record.

    if (cartRecord) {
      // code...
    } else {
      let cartObject = new CreateOrderDto(cartMetaData);
      let cart = await this.cartService.create(cartObject.getFields());
      return cart;
    }

    // const cartObject = new CreateOrderDto(cartMetaData);
  	// const orderMetaData = {customer: req.user._id, items: item};
  	// const order = new CreateOrderDto(orderMetaData);
   //  return this.cartService.create(order.getFields())
   //  .then(order => {
   //    return order;
   //  })
   //  .catch(e => {
   //    throw new HttpException(e.message, HttpStatus.NOT_ACCEPTABLE);
   //  });
  }

  @Delete()
  @UseGuards(AuthenticatedGuard)
  async delete(@Req() req: any, @Body('itemId') itemId: string): Promise<any> {
    // TODO: 
    // -  Get cart record.
    // - Remove item from cart using itemID
  }

  @Put()
  @UseGuards(AuthenticatedGuard)
  async update(@Req() req: any, @Body('item') item: {_id: string, qty: number}): Promise<any> {
    // TODO: 
    // - Check if id and qty exist. Return error if not
    // - Get cart record.
    // - Update item
  }

	@Get('schema')
  schema(): any {
    return CartSchema.paths;
  }

  async getCart(userId): Promise<Cart | undefined> {
    let cart = await this.cartService.findOne({customer: userId});
    return cart;
  }
}
