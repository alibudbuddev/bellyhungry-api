import { Controller, Get, Req } from '@nestjs/common';
import { Cart, CartSchema } from './cart.schema';

@Controller('cart')
export class CartController {

	@Get('schema')
  schema(): any {
    return CartSchema.paths;
  }
}
