import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart } from './cart.schema';
import CreateOrderDto from '@modules/order/dto/create-order.dto';

@Injectable()
export class CartService {

	constructor(@InjectModel(Cart.name) private cartModel: Model<any>) {}

	async findOne(filter: any = {}): Promise<Cart> {
    return this.cartModel.findOne(filter).exec();
  }

  async create(object: CreateOrderDto): Promise<any> {
    const query = new this.cartModel(object);
    return query.save();
  }
}
