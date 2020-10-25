import { Controller, Get, Delete, Post, Put, Req, Body, Param, HttpException, HttpStatus, UseGuards } from '@nestjs/common';
import { merge } from 'lodash';
import { Cart, CartSchema } from './cart.schema';
import { CartService } from './cart.service';
import { AuthenticatedGuard } from '@guards/authenticated.guard';
import CartItemDto from './dto/cart-item.dto';

@Controller('cart')
export class CartController {

	constructor(private cartService: CartService) {}

  @Get()
  @UseGuards(AuthenticatedGuard)
  find(@Req() req: any): any {
    return this.cartService.find({customer: req.user._id});
  }

	@Post()
  @UseGuards(AuthenticatedGuard)
  async create(@Req() req: any, @Body('item') item: CartItemDto): Promise<any> {
    const customer = req.user._id;
    const filter = {customer: customer, product: item.product};
    const isCartExist = await this.isCartExist(filter);
    const cartItem = merge(item, new CartItemDto(item, customer));

    if (isCartExist) {
      return this.cartService.addQty(filter, cartItem);
    } else {
      return this.cartService.addItem(cartItem);
    }
  }

  @Delete()
  @UseGuards(AuthenticatedGuard)
  async delete(@Req() req: any, @Body('product') product: string): Promise<any> {
    const customer = req.user._id;
    const filter = {customer: customer, product: product};
    const isCartExist = await this.isCartExist(filter);

    if (!isCartExist) {
      throw new HttpException('Invalid Product ID', HttpStatus.NOT_ACCEPTABLE);
    }

    return this.cartService.deleteOne(filter);
  }

  @Put(':id')
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

  async isCartExist(filter: {customer: string, product: string}): Promise<boolean | undefined> {
    let cart = await this.cartService.isCartExist(filter);
    return cart;
  }
}
