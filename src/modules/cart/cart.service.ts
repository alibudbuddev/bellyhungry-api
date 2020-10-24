import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart } from './cart.schema';
import CreateOrderDto from '@modules/order/dto/create-order.dto';
import OrderItemDto from '@modules/order/dto/order-item.dto';

@Injectable()
export class CartService {

	constructor(@InjectModel(Cart.name) private cartModel: Model<any>) {}

	async isCartExist(filter: any = {}): Promise<boolean | undefined> {
    return this.cartModel.exists(filter);
  }

  async findOne(filter): Promise<any | undefined> {
    return this.cartModel.findOne(filter);
  }

  async create(object: CreateOrderDto): Promise<any> {
    const query = new this.cartModel(object);
    return query.save();
  }

  async addItem(filter: any = {}, item: OrderItemDto): Promise<any> {
    const cart = await this.cartModel.findOne(filter);
    if (cart) {
    	cart.items.push(item);
    	cart.save();
    }
    return cart;
  }
}
