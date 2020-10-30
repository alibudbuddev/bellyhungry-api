import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './order.schema';
import { OrderItem } from '@schema/order-items.schema';
import CreateOrderDto from './dto/create-order.dto';
import OrderItemDto from './dto/order-item.dto';

@Injectable()
export class OrderService {
	private publicFields: string = '';

	constructor(
    @InjectModel(Order.name) private orderModel: Model<any>,
    @InjectModel(OrderItem.name) private orderItemModel: Model<any>
  ) {}

	async find(filter: any = {}, fields: string = '', population: string[] = []): Promise<Order[]> {
    return this.orderModel.find(filter, fields)
    .populate(population)
    .exec();
  }

  async findById(id): Promise<Order> {
    return this.orderModel.findById(id, this.publicFields).exec();
  }

  async findOneAndUpdate(filter: {merchant: string, _id: string}, body: any): Promise<any | undefined> {
    return this.orderModel.findOneAndUpdate(filter, body);
  }

	async create(object: CreateOrderDto, items: OrderItemDto[]): Promise<any> {
    const order = new this.orderModel(object);
    await order.save();
    items = items.map(x => {
      x['order'] = order._id;
      return x;
    });
    
    await this.orderItemModel.insertMany(items);
    return order;
  }

  async items(filter: any = {}): Promise<OrderItem[]> {
    return this.orderItemModel.find(filter);
  }
}
