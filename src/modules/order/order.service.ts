import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './order.schema';
import CreateOrderDto from './dto/create-order.dto';

@Injectable()
export class OrderService {
	private publicFields: string = '';

	constructor(@InjectModel(Order.name) private orderModel: Model<any>) {}

	async find(filter: any = {}): Promise<Order[]> {
    return this.orderModel.find(filter, this.publicFields).exec();
    // .populate('merchant', 'name')
    // .exec();
  }

  async findById(id): Promise<Order> {
    return this.orderModel.findById(id, this.publicFields).exec();
  }

  async findOneAndUpdate(filter: {merchant: string, _id: string}, body: any): Promise<any | undefined> {
    return this.orderModel.findOneAndUpdate(filter, body);
  }

	async create(object: CreateOrderDto): Promise<any> {
    const query = new this.orderModel(object);
    return query.save();
  }
}
