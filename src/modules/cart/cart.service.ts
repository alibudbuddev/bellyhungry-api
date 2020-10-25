import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart } from './cart.schema';
import CreateOrderDto from '@modules/order/dto/create-order.dto';
import CartItemDto from './dto/cart-item.dto';

@Injectable()
export class CartService {

	constructor(@InjectModel(Cart.name) private cartModel: Model<any>) {}

	async isCartExist(filter: any = {}): Promise<boolean | undefined> {
    return this.cartModel.exists(filter);
  }

  async findOne(filter): Promise<any | undefined> {
    return this.cartModel.findOne(filter);
  }

  async addItem(object: CartItemDto): Promise<any> {
    const query = new this.cartModel(object);
    return query.save();
  }

  async addQty(filter, object: CartItemDto): Promise<any> {
    const cartObj: any = await this.cartModel.findOne(filter, 'qty price totalPrice').lean();
    cartObj.qty += object.qty;
    cartObj.totalPrice = cartObj.qty * cartObj.price;
    return this.cartModel.findOneAndUpdate(filter, cartObj, {new: true});
  }
}
