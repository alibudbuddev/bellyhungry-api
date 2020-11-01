import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Order } from '@modules/order/order.schema';
import { OrderItem } from '@schema/order-items.schema';
import { MerchantOrders } from '@aggregates/index';

@Injectable()
export class MerchantService {

	constructor(
    @InjectModel(Order.name) private orderModel: Model<any>,
    @InjectModel(OrderItem.name) private orderItemModel: Model<any>
  ) {}

  async getOrders(merchantId: string): Promise<any[]> {
  	const pipeline = MerchantOrders(merchantId);
    return this.orderItemModel.aggregate(pipeline);
  }

  async getOrder(merchantId: string, orderId: string): Promise<any[]> {
  	const filter = {order: Types.ObjectId(orderId), merchant: Types.ObjectId(merchantId)};
    return this.orderItemModel.find(filter);
  }
}
